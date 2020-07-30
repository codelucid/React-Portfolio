import React from "react";

const ProjectContext = React.createContext({
    display: false,
    title: "",
    deployedLink: "",
    githubLink: "",
    screenshot: "",
    onClick: () => undefined
});
export default ProjectContext;