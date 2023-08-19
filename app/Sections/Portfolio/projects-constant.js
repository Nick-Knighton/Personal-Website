export const projects = [
  {
    title: "Rev's American Grill Website",
    description:
      "The Rev's American Grill website project involved a team of five, with me as the lead front-end engineer. Collaborating with my talented colleagues, we utilized React and Django to create an appealing and user-friendly website. I took charge of designing the layout, integrating various Google APIs for enhanced functionality, and ensuring seamless connectivity between all elements. Leveraging GitHub for version control and MySQL for storing menu items and inventory, we successfully delivered a dynamic website that allowed customers to explore the menu, servers to input orders, and managers to check stock levels.",
    technology: [
      "React",
      "Python",
      "JavaScript",
      "Django",
      "Bootstrap",
      "Github",
      "SQL",
      "Jira",
      "OpenGL"
    ],
    images: [
      { src: "/Project Photos/Revs/main-screen.png" },
      { src: "/Project Photos/Revs/google-maps.png" },
      { src: "/Project Photos/Revs/server.png" },
      { src: "/Project Photos/Revs/google-translate.png" },
      { src: "/Project Photos/Revs/manager.png" },
    ],
  },

  {
    title: "Personal Website",
    description:
      "My personal website, developed using Next.js, Tailwind CSS, Firebase, and GitHub, serves as a comprehensive showcase of my work and experiences. The website features a project portfolio section, highlighting my notable projects and achievements. It also showcases my passion for photography, displaying captivating images from my travels around the world. A special addition is the interactive map, where visitors can explore the countries I have visited. Additionally, the website provides easy access to my resume, offering a detailed overview of my skills, experience, and education. The combination of these technologies and features results in an engaging and visually appealing platform that represents my professional profile and personal journey.",
    technology: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "Firebase",
      "Github",
      "ChatGPT",
    ],
    images: [
      { src: "/Project Photos/Personal-Website/home-screen.jpg" },
      { src: "/Project Photos/Personal-Website/portfolio-filled.jpg" },
      { src: "/Project Photos/Personal-Website/portfolio-filtered.jpg" },
      { src: "/Project Photos/Personal-Website/countries-visited.jpg" },
    ],
  },

  {
    title: "Rasterizer",
    description:
      "The rasterizer project I completed for my computer graphics class was an impressive undertaking in C++. This program showcased my understanding of rendering techniques as it successfully read in .obj files and computed the coloring for each point. With a focus on versatility, the rasterizer incorporated multiple coloring techniques, allowing for a range of visual effects. By leveraging the power of C++ and implementing efficient algorithms, the program accurately determined the color values for each point, resulting in visually appealing and realistic renderings. Through this project, I not only demonstrated my proficiency in computer graphics but also showcased my ability to apply advanced concepts to create a sophisticated rendering system.",
    technology: ["C++"],
    images: [
      { src: "/Project Photos/Rasterizer/2.png" },
      { src: "/Project Photos/Rasterizer/3.png" },
      { src: "/Project Photos/Rasterizer/6.png" },
      { src: "/Project Photos/Rasterizer/7.png" },
      { src: "/Project Photos/Rasterizer/1.png" },
      { src: "/Project Photos/Rasterizer/4.png" },
      { src: "/Project Photos/Rasterizer/5.png" },
    ],
  },

  
  {
    title: "Ray Tracer",
    description:
      "In my project, I developed a ray tracer using C++, which showcased my expertise in computer graphics and ray tracing algorithms. The ray tracer was designed to simulate the behavior of light in a virtual scene. By calculating rays emanating from the camera, it determined the color and shading of objects in the scene, taking into account multiple light sources, multiple objects, and shadows. The ray tracer's implementation involved efficient algorithms that accurately simulated the interaction of light with different surfaces, resulting in realistic and visually stunning renderings. This project exemplified my ability to apply complex principles in computer graphics and demonstrated my proficiency in C++ programming.",
    technology: ["C++"],
    images: [
      { src: "/Project Photos/Ray Tracer/1.png" },
      { src: "/Project Photos/Ray Tracer/2.png" },
      { src: "/Project Photos/Ray Tracer/3.png" },
    ],
  },
  
  {
    title: "OpenGL Shaders",
    description: "Leveraging the combined power of C++ and OpenGL, I created a project that delved deep into the intricacies of graphics programming. The focal point of this endeavor was the development of a robust shader suite adept at seamlessly accommodating complex lighting scenarios and a diverse range of material properties. Through meticulous coding, I created shaders that could handle multiple lights, meticulously orchestrating their interactions with surfaces to produce realistic and captivating visual effects. Furthermore, I engineered the shaders to dynamically adapt to different materials, allowing them to accurately capture and simulate various reflective, refractive, and absorptive qualities. This intricate interplay between code and computation culminated in a project that not only showcases my technical skills but also demonstrates a profound understanding of the nuanced relationship between light, materials, and computer-generated imagery.",
    technology: ["C++", "OpenGL"],
    images: [
      { src: "/Project Photos/Shaders/normal-shader.jpg" },
      { src: "/Project Photos/Shaders/silhouette-shader-2.jpg" },
      { src: "/Project Photos/Shaders/blinn-phong-shader-3.jpg" },
      { src: "/Project Photos/Shaders/blinn-phong-shader.jpg" },
      { src: "/Project Photos/Shaders/blinn-phong-shader-2.jpg" },
      { src: "/Project Photos/Shaders/silhouette-shader.jpg" },
    ],
  },
  
  {
    title: "Matrix Stack Robot",
    description: "Using C++ and OpenGL I created a robot simulation that demonstrates an adept utilization of matrix stacks. The core objective was to master and apply hierarchical 3D transformations, with a goal of creating an interactive robot that could be controlled through keyboard inputs. The project entailed the design and implementation of a structured robotic character. This hierarchical arrangement encompassed a diverse assembly of components, including a central Torso, articulated Head, Upper and Lower limbs for both arms and legs, culminating in a meticulously interconnected framework that facilitated dynamic manipulation and control. Through the fusion of C++ programming and OpenGL graphics rendering, the resultant interactive robot simulation not only exhibited a visually captivating manifestation but also embodied a profound understanding of hierarchical transformations and their pivotal role in synthesizing complex, articulated structures.",
    technology: ["C++", "OpenGL"],
    images: [
      { src: "/Project Photos/Matrix-Stack-Robot/robot-transformed.jpg" },
      { src: "/Project Photos/Matrix-Stack-Robot/robot.jpg" },
      { src: "/Project Photos/Matrix-Stack-Robot/robot-transformed-2.jpg" },
    ],
  },

  {
    title: "RBFCU Non-Member Online Loan Application",
    description:
      "During my internship at RBFCU, I undertook a web development project to update their Non-member loan application page. Using Angular, TypeScript, and GitHub, I successfully migrated the page from outdated technology to the modern Angular framework. In addition to the technical update, I also revamped the page's style to align it with RBFCU's current style guide. The project not only improved the user experience by leveraging Angular's robust features but also ensured a cohesive visual identity by adhering to the organization's style guidelines. Through this project, I demonstrated my proficiency in Angular, TypeScript, and attention to design details, contributing to RBFCU's ongoing commitment to providing an enhanced digital experience for their customers.",
    technology: ["Angular", "TypeScript", "Github", "Tachyons"],
    images: [
      { src: "/Project Photos/RBFCU/applicant-info-old.png" },
      { src: "/Project Photos/RBFCU/loan-screen-old.png" },
    ],
  },

  {
    title: "Dynamic Rendering",
    description: "I pioneered an exceptional dynamic rendering project, harnessing the capabilities of C++ and OpenGL to bring a new dimension to visual experiences. My focus encompassed the successful integration of attenuated lights, lending depth and authenticity to the scenes. Introducing a diverse array of dynamic 3D transformations, including rotations, shears, and strategic transformation sequencing, amplified the project's visual versatility and allure. Additionally, I explored advanced techniques for surface rendering, achieving captivating outcomes that highlighted both technical expertise and creative vision.",
    technology: ["C++", "OpenGL"],
    images: [
      { src: "/Project Photos/Dynamic-Rendering/dynamic-rendering.jpg" },
      { src: "/Project Photos/Dynamic-Rendering/dynamic-rendering-2.jpg" },
      { src: "/Project Photos/Dynamic-Rendering/dynamic-rendering-3.jpg" },
    ],
  },
  
  {
    title: "Grocery List With Recipes",
    description:
    "The grocery list and recipe storage project was completed as part of an Angular training course on Udemy. Using Angular, TypeScript, Bootstrap, and Firebase, I developed a user-friendly application that allowed users to create accounts, log in securely, and manage their grocery lists and recipes. The application provided functionality for adding, editing, and removing items from the grocery list, as well as storing and organizing recipes. With Firebase as the backend service, the application ensured secure data storage and synchronization across devices. The responsive design implemented with Bootstrap enabled a seamless user experience. Overall, the project showcased my proficiency in Angular, TypeScript, Bootstrap, and Firebase, delivering a convenient and organized solution for managing grocery lists and storing recipes.",
    technology: ["Angular", "TypeScript", "Github", "Bootstrap", "Firebase"],
    images: [
      { src: "/Project Photos/Grocery-List/recipe-creation.jpg" },
      { src: "/Project Photos/Grocery-List/login-screen.jpg" },
      { src: "/Project Photos/Grocery-List/recipes.jpg" },
      { src: "/Project Photos/Grocery-List/shopping-list.jpg" },
    ],
  },
  

];
