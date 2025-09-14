import { useState, useEffect, useCallback } from "react";
import projectsConstant from "../constants/projects"; // Your provided constant

const GITHUB_API_URL = "https://api.github.com/users/VrajVyas11/repos";

const fetchGithubProjects = async () => {
  const response = await fetch(GITHUB_API_URL);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }
  return response.json();
};

const sanitizeProjectData = (githubProjects) => {
  return githubProjects.map((repo) => ({
    title: repo.name.replace(/_/g, " "), // Replace underscores for better titles
    full_name: repo.full_name,
    githubLink: repo.html_url,
    description: repo.description || "No description available.",
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    pushed_at: repo.pushed_at,
    language: repo.language || "N/A",
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    license: repo.license,
    liveLink: repo.homepage || "", // GitHub homepage field often used for live links
    // Default image if not explicitly set in constant. You might want a better default.
    image: "/default_project.png", // This will be overridden by the constant if available
    tags: [], // Tags usually need manual addition or tag generation logic
    default_branch: repo.default_branch,
  }));
};

const useGithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOrderedProjects = useCallback((githubData, constantData) => {
    const githubMap = new Map(
      githubData.map((project) => [project.full_name, project]),
    );

    const orderedProjects = [];
    const processedGithubFullNames = new Set();

    // 1. Add projects from the constant in their defined order
    constantData.forEach((constantProject) => {
      const githubProject = githubMap.get(constantProject.full_name);
      if (githubProject) {
        // Merge constant data with GitHub data, constant takes precedence for specific fields
        orderedProjects.push({
          ...githubProject,
          ...constantProject, // Overwrite with constant values (e.g., specific image, tags, better description)
          title: constantProject.title, // Ensure constant title is used
          description: constantProject.description, // Ensure constant description is used
          image: constantProject.image, // Ensure constant image is used
          tags: constantProject.tags || [], // Ensure constant tags are used
          liveLink: constantProject.liveLink || githubProject.liveLink || "", // Prefer constant liveLink
        });
        processedGithubFullNames.add(constantProject.full_name);
      } else {
        // If a project is in constant but not on GitHub (e.g., private or deleted), add it as is
        orderedProjects.push(constantProject);
      }
    });

    // 2. Add any remaining GitHub projects not present in the constant
    githubData.forEach((githubProject) => {
      if (!processedGithubFullNames.has(githubProject.full_name)) {
        orderedProjects.push(githubProject);
      }
    });

    return orderedProjects;
  }, []);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGithubProjects();
        const sanitizedGithubProjects = sanitizeProjectData(githubRepos);
        const mergedProjects = getOrderedProjects(
          sanitizedGithubProjects,
          projectsConstant,
        );
        setProjects(mergedProjects);
      } catch (err) {
        console.error("Failed to load projects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [getOrderedProjects]);

  return { projects, loading, error };
};

export default useGithubProjects;