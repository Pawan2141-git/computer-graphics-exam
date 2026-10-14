// 460 Questions extracted from:
// 1. Computer_Graphics_MCQs_200.pdf (L1 - L20)
// 2. Computer_Graphics_MCQs_L21-L39.pdf (L21 - L39)
// 3. Computer_Graphics_MCQs_L40-L49.pdf (L40 - L49)

const questions = [
  {
    "q": "In the CAD example, how does virtual assembly of components on screen help an engineer?",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "It only helps in document editing",
      "It increases the number of physical prototypes",
      "It removes the need for specifying component dimensions",
      "It saves time, effort and cost as no physical prototype is needed"
    ],
    "answer": "It saves time, effort and cost as no physical prototype is needed"
  },
  {
    "q": "DNA visualization is an example of:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Scientific visualization",
      "Animation only",
      "Information visualization",
      "Document processing"
    ],
    "answer": "Scientific visualization"
  },
  {
    "q": "Computer network traffic flow visualization is an example of:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Scientific visualization",
      "CAD interface",
      "Information visualization",
      "Image processing"
    ],
    "answer": "Information visualization"
  },
  {
    "q": "Computers understand only:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Characters",
      "Decimal numbers",
      "Pictures",
      "Binary language of 0s and 1s"
    ],
    "answer": "Binary language of 0s and 1s"
  },
  {
    "q": "How many basic questions are framed from the fundamental question of computer graphics?",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "answer": "Four"
  },
  {
    "q": "Which of the following is NOT one of the four basic questions of CG?",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "How to increase the clock speed of the CPU",
      "How to let users manipulate imagery on screen",
      "How to synthesize parts into realistic imagery",
      "How to represent the constituent parts of imagery"
    ],
    "answer": "How to increase the clock speed of the CPU"
  },
  {
    "q": "Computer graphics can be summarised as:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Typing text using a keyboard",
      "Storing images on disk",
      "Rendering static images or animation on computer screens in an efficient way",
      "Compressing video files"
    ],
    "answer": "Rendering static images or animation on computer screens in an efficient way"
  },
  {
    "q": "Displaying something on a mobile phone needs different techniques from a desktop because of differences in:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Keyboard layout",
      "CPU speed, memory capacity and power consumption",
      "Screen colour only",
      "Internet speed"
    ],
    "answer": "CPU speed, memory capacity and power consumption"
  },
  {
    "q": "Which area of computer graphics deals with manipulating existing images?",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Animation",
      "Rendering pipeline",
      "Image processing",
      "Image synthesis"
    ],
    "answer": "Image processing"
  },
  {
    "q": "Text characters on a computer screen are, in computer graphics:",
    "topic": "L1: Introduction to Computer Graphics",
    "lecture": "L1",
    "options": [
      "Not related to graphics",
      "Also images (objects rendered with a style and size)",
      "Always vector curves",
      "Only binary numbers"
    ],
    "answer": "Also images (objects rendered with a style and size)"
  },
  {
    "q": "Who proposed the four phases of CG evolution (Lockheed, 1981)?",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "Edwin Catmull",
      "William Fetter",
      "Ivan Sutherland",
      "Sylvan Chasen"
    ],
    "answer": "Sylvan Chasen"
  },
  {
    "q": "The 'Gestational Period' of CG covers which years?",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "1950-1963",
      "1964-1970",
      "1970-1981",
      "After 1981"
    ],
    "answer": "1950-1963"
  },
  {
    "q": "SAGE was:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "The air defense system of the US Air Force, a product of the Whirlwind project",
      "The first CAD package",
      "A texture mapping method",
      "A computer game"
    ],
    "answer": "The air defense system of the US Air Force, a product of the Whirlwind project"
  },
  {
    "q": "The first computer game, Spacewar, was made in 1961 by:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "James Blinn",
      "Steve Russell and team",
      "Bui Tuong Phong",
      "Ivan Sutherland"
    ],
    "answer": "Steve Russell and team"
  },
  {
    "q": "The first CAD system DAC-1 was developed by:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "Boeing",
      "MIT",
      "Intel",
      "IBM"
    ],
    "answer": "IBM"
  },
  {
    "q": "Intel released its first commercial microprocessor, the 4004, in:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "1950",
      "1963",
      "1971",
      "1981"
    ],
    "answer": "1971"
  },
  {
    "q": "Ray tracing technique was introduced by Whitted in:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "1981",
      "1980",
      "1978",
      "1974"
    ],
    "answer": "1980"
  },
  {
    "q": "Which movie (1973) is mentioned as the first to use computer graphics?",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "Westworld",
      "Sketchpad",
      "Spacewar",
      "Star Wars"
    ],
    "answer": "Westworld"
  },
  {
    "q": "The release of the IBM PC in 1981 led CG to shift its focus towards:",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "Laymen, which gave rise to HCI",
      "Experts only",
      "Vector devices",
      "Military use"
    ],
    "answer": "Laymen, which gave rise to HCI"
  },
  {
    "q": "Which describes 'Rendering' among the three major 3D concerns (modeling, rendering, animation)?",
    "topic": "L2: History, Issues and Challenges",
    "lecture": "L2",
    "options": [
      "Describing how the image changes over time",
      "Creating and displaying a 2D image of 3D objects",
      "Designing input devices",
      "Creating object geometry in 3D"
    ],
    "answer": "Creating and displaying a 2D image of 3D objects"
  },
  {
    "q": "Image generation in a CG system is performed by the:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Frame buffer",
      "Keyboard",
      "Mouse",
      "Display controller (graphics card with GPU)"
    ],
    "answer": "Display controller (graphics card with GPU)"
  },
  {
    "q": "Video memory is typically part of the graphics card and is called:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "ROM",
      "Cache",
      "VRAM",
      "Hard disk"
    ],
    "answer": "VRAM"
  },
  {
    "q": "The video controller converts the digital image to:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Text",
      "Analog voltages",
      "Binary strings",
      "Vectors"
    ],
    "answer": "Analog voltages"
  },
  {
    "q": "Vector scan devices are also known as:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Random-scan, stroke-writing or calligraphic devices",
      "Frame-buffer devices",
      "Pixel devices",
      "Raster devices"
    ],
    "answer": "Random-scan, stroke-writing or calligraphic devices"
  },
  {
    "q": "Vector scan devices are good for rendering:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Wireframe (outline) images",
      "Only colour images",
      "Video",
      "Complex photo-realistic scenes"
    ],
    "answer": "Wireframe (outline) images"
  },
  {
    "q": "In raster scan, each row of the pixel grid is called a:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Texel",
      "Scan line",
      "Frame",
      "Voxel"
    ],
    "answer": "Scan line"
  },
  {
    "q": "Why is a frame buffer used in raster scan systems?",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "To store audio",
      "Display processor works in nanoseconds while video controller works in milliseconds (speed mismatch)",
      "To remove colours",
      "To increase screen size"
    ],
    "answer": "Display processor works in nanoseconds while video controller works in milliseconds (speed mismatch)"
  },
  {
    "q": "A typical screen refresh rate is at least:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "30 Hz",
      "10 Hz",
      "600 Hz",
      "60 Hz"
    ],
    "answer": "60 Hz"
  },
  {
    "q": "The colour look-up table method assumes that:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "The screen is monochrome",
      "All colours of the gamut are needed",
      "Only a small fraction of the colour gamut is required and those colours are known",
      "Frame buffer is very large"
    ],
    "answer": "Only a small fraction of the colour gamut is required and those colours are known"
  },
  {
    "q": "Raster graphics and vector graphics refer to:",
    "topic": "L3: Graphics System Basics",
    "lecture": "L3",
    "options": [
      "Colour models",
      "Hardware rendering process",
      "Only image representation, not the underlying rendering hardware",
      "Types of CPU"
    ],
    "answer": "Only image representation, not the underlying rendering hardware"
  },
  {
    "q": "In which stage are objects put together from local coordinates into world coordinates?",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Scan conversion",
      "Viewing transformation",
      "Lighting",
      "Modeling transformation"
    ],
    "answer": "Modeling transformation"
  },
  {
    "q": "The 3rd stage of the pipeline (lighting) uses methods that mimic:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Laws of thermodynamics",
      "Boolean algebra",
      "Laws of mechanics",
      "Laws of optics"
    ],
    "answer": "Laws of optics"
  },
  {
    "q": "The process of removing objects outside the view volume is:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Rasterization",
      "Clipping",
      "Interpolation",
      "Shading"
    ],
    "answer": "Clipping"
  },
  {
    "q": "Hidden surface removal is also known as:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Texture mapping",
      "Visible surface detection",
      "Scan conversion",
      "Anti-aliasing"
    ],
    "answer": "Visible surface detection"
  },
  {
    "q": "Window-to-viewport transformation maps the 2D projected scene to:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "A region of the device coordinate system called viewport",
      "Object coordinates",
      "World coordinates",
      "The frame buffer directly"
    ],
    "answer": "A region of the device coordinate system called viewport"
  },
  {
    "q": "The 4th stage (viewing pipeline) involves:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Only projection",
      "2 transformations + 3 operations",
      "5 transformations",
      "3 transformations + 2 operations (clipping, hidden surface removal)"
    ],
    "answer": "3 transformations + 2 operations (clipping, hidden surface removal)"
  },
  {
    "q": "Scan conversion is also called:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Rasterization",
      "Shearing",
      "Clipping",
      "Modeling"
    ],
    "answer": "Rasterization"
  },
  {
    "q": "OpenGL stands for:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Online Graphics Link",
      "Optical Graphics Language",
      "Object Graphics Layer",
      "Open source Graphics Library"
    ],
    "answer": "Open source Graphics Library"
  },
  {
    "q": "The function glColor3f(r, g, b) in OpenGL:",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Assigns a colour to a 3D point",
      "Draws a circle",
      "Rotates an object",
      "Clears the screen"
    ],
    "answer": "Assigns a colour to a 3D point"
  },
  {
    "q": "Which stage concerns mapping a continuous device coordinate space to the discrete pixel grid?",
    "topic": "L4: Graphics Pipeline and Libraries",
    "lecture": "L4",
    "options": [
      "Scan conversion",
      "Modeling transformation",
      "Object representation",
      "Lighting"
    ],
    "answer": "Scan conversion"
  },
  {
    "q": "The four broad types of object representation are point sample, boundary, space partitioning and:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Fractal representation",
      "Mesh representation",
      "Sweep representation",
      "Texture representation"
    ],
    "answer": "Sweep representation"
  },
  {
    "q": "Point sample representation captures raw data using sensors such as:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Keyboards",
      "Speakers",
      "Printers",
      "3D range scanners"
    ],
    "answer": "3D range scanners"
  },
  {
    "q": "Representing a cube as a collection of interlinked rectangles is an example of:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Particle system",
      "Point sample representation",
      "Boundary representation",
      "Sweep representation"
    ],
    "answer": "Boundary representation"
  },
  {
    "q": "In space partitioning, any point inside the object lies in:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Two regions",
      "All regions",
      "No region",
      "Exactly one of the disjoint regions"
    ],
    "answer": "Exactly one of the disjoint regions"
  },
  {
    "q": "A common way to depict hierarchically partitioned regions is a:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Stack",
      "Hash table",
      "Space-partitioning tree",
      "Linked list"
    ],
    "answer": "Space-partitioning tree"
  },
  {
    "q": "In a sweep surface, a 3D surface is obtained by:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Traversing an entity (point, line, polygon, curve) along a path in space",
      "Rotating a 3D object",
      "Dividing space into voxels",
      "Combining Boolean operators"
    ],
    "answer": "Traversing an entity (point, line, polygon, curve) along a path in space"
  },
  {
    "q": "A surface of revolution is obtained when:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "A 3D object is translated",
      "A line is scaled",
      "A mesh is subdivided",
      "A 2D entity is rotated around an axis"
    ],
    "answer": "A 2D entity is rotated around an axis"
  },
  {
    "q": "The three types of boundary representation techniques are:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Mesh, parametric, implicit",
      "Fractal, particle, skeletal",
      "Voxel, pixel, texel",
      "Octree, BSP, CSG"
    ],
    "answer": "Mesh, parametric, implicit"
  },
  {
    "q": "Which are space-partitioning methods?",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Gaussian bumps",
      "Mesh and spline",
      "Octrees, BSP trees and CSG",
      "Fractals and particles"
    ],
    "answer": "Octrees, BSP trees and CSG"
  },
  {
    "q": "Particle system representation is used for:",
    "topic": "L5: Object Representation Basics",
    "lecture": "L5",
    "options": [
      "Skeletal characters",
      "Self-repeating objects",
      "Polygon meshes",
      "Simulation of physics"
    ],
    "answer": "Simulation of physics"
  },
  {
    "q": "Mesh representation uses:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Polygons with vertex/edge lists",
      "Voxels",
      "Textures",
      "Only splines"
    ],
    "answer": "Polygons with vertex/edge lists"
  },
  {
    "q": "Non-polygonal surfaces in mesh representation are:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Approximated by triangle or simple convex polygon meshes",
      "Stored as images",
      "Ignored",
      "Converted to voxels"
    ],
    "answer": "Approximated by triangle or simple convex polygon meshes"
  },
  {
    "q": "Increasing the number of polygons in a mesh gives:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Faster rendering always",
      "Worse approximation, less storage",
      "Better approximation but more storage and computation",
      "No change"
    ],
    "answer": "Better approximation but more storage and computation"
  },
  {
    "q": "At the end of the pipeline, before rendering, all other representations are converted to:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Octrees",
      "Fractals",
      "Mesh representation",
      "CSG"
    ],
    "answer": "Mesh representation"
  },
  {
    "q": "The implicit equation of a sphere of radius r at the origin is:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "x^3 + y^3 + z^3 = r",
      "x + y + z = r",
      "x^2 + y^2 + z^2 = r^2",
      "xyz = r"
    ],
    "answer": "x^2 + y^2 + z^2 = r^2"
  },
  {
    "q": "The parameters in the parametric form of a sphere are:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Height and width",
      "Radius only",
      "Mass and density",
      "Latitude and longitude angles (theta and phi)"
    ],
    "answer": "Latitude and longitude angles (theta and phi)"
  },
  {
    "q": "Quadric surfaces include:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Spheres, ellipsoids, tori, paraboloids, hyperboloids",
      "Only splines",
      "Only planes",
      "Only cubes"
    ],
    "answer": "Spheres, ellipsoids, tori, paraboloids, hyperboloids"
  },
  {
    "q": "'Blobby objects' are objects whose shapes show:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "No curvature",
      "Only straight edges",
      "Rigidity",
      "A degree of fluidity (e.g. water droplets, melting objects)"
    ],
    "answer": "A degree of fluidity (e.g. water droplets, melting objects)"
  },
  {
    "q": "A Gaussian density function is characterised by:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Texture and bump",
      "Radius and colour",
      "Height and standard deviation",
      "Position only"
    ],
    "answer": "Height and standard deviation"
  },
  {
    "q": "The Metaball model uses:",
    "topic": "L6: Mesh, Implicit and Parametric Representation",
    "lecture": "L6",
    "options": [
      "Linear function",
      "Gaussian density function",
      "Cubic spline",
      "Quadratic density function"
    ],
    "answer": "Quadratic density function"
  },
  {
    "q": "Control points are:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Light sources",
      "Pixels on the screen",
      "Points which define the curve (it passes through or near them)",
      "Texture elements"
    ],
    "answer": "Points which define the curve (it passes through or near them)"
  },
  {
    "q": "For n+1 control points, interpolation with a single polynomial uses a polynomial of degree:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "n + 1",
      "n",
      "n - 1",
      "2n"
    ],
    "answer": "n"
  },
  {
    "q": "The local controllability problem means:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Curve is always a line",
      "Curve is always smooth",
      "Changing one control point may require recomputing the entire curve",
      "The curve cannot be drawn"
    ],
    "answer": "Changing one control point may require recomputing the entire curve"
  },
  {
    "q": "A spline is:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Several lower-degree polynomial pieces joined together",
      "A single high-degree polynomial",
      "A texture",
      "A set of pixels"
    ],
    "answer": "Several lower-degree polynomial pieces joined together"
  },
  {
    "q": "In graphics, splines are commonly made up of:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Linear polynomials",
      "Fifth-degree polynomials",
      "Constant functions",
      "Cubic (third-degree) polynomials"
    ],
    "answer": "Cubic (third-degree) polynomials"
  },
  {
    "q": "C1 parametric continuity means:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Curves just meet",
      "Curvatures differ",
      "First-order parametric derivatives of adjoining curves are equal at the boundary",
      "Curves never meet"
    ],
    "answer": "First-order parametric derivatives of adjoining curves are equal at the boundary"
  },
  {
    "q": "G1 geometric continuity means:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Both curve ends equal",
      "Second derivatives equal",
      "Tangent directions are equal but magnitudes may differ",
      "Curves do not meet"
    ],
    "answer": "Tangent directions are equal but magnitudes may differ"
  },
  {
    "q": "Approximating splines:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Are always linear",
      "Pass exactly through all control points",
      "Pass close to control points; control points define a convex hull",
      "Do not use control points"
    ],
    "answer": "Pass close to control points; control points define a convex hull"
  },
  {
    "q": "The inverse of the constraint matrix C is called the:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "Identity matrix",
      "Coefficient matrix",
      "Parameter matrix",
      "Basis matrix"
    ],
    "answer": "Basis matrix"
  },
  {
    "q": "For the linear polynomial example, the blending functions are:",
    "topic": "L7: Spline Representation (Basics)",
    "lecture": "L7",
    "options": [
      "1 - u and u",
      "u^2 and u^3",
      "u and u^2",
      "1 and u"
    ],
    "answer": "1 - u and u"
  },
  {
    "q": "Natural cubic splines support C2 continuity but:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Do not support local controllability",
      "Support local controllability",
      "Use no control points",
      "Are quadratic"
    ],
    "answer": "Do not support local controllability"
  },
  {
    "q": "Hermite cubic splines support:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "C2 continuity, no local control",
      "C1 continuity and local controllability",
      "No continuity",
      "Only G0"
    ],
    "answer": "C1 continuity and local controllability"
  },
  {
    "q": "In Cardinal cubic splines, setting tension t = 0 gives the:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Bezier curve",
      "NURBS",
      "Catmull-Rom (Overhauser) spline",
      "B-spline"
    ],
    "answer": "Catmull-Rom (Overhauser) spline"
  },
  {
    "q": "Bezier curves are named after Pierre Bezier, who first used them to design:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Ships",
      "Renault car bodies",
      "Boeing aircraft",
      "Bridges"
    ],
    "answer": "Renault car bodies"
  },
  {
    "q": "A cubic Bezier curve piece:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Passes through all four control points",
      "Starts at p0, ends at p3, other two points shape the convex hull",
      "Passes through only p1 and p2",
      "Is a straight line"
    ],
    "answer": "Starts at p0, ends at p3, other two points shape the convex hull"
  },
  {
    "q": "Bezier blending functions are known as:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Hermite polynomials",
      "Taylor polynomials",
      "Bernstein polynomials",
      "Legendre polynomials"
    ],
    "answer": "Bernstein polynomials"
  },
  {
    "q": "B-splines support:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "No local control",
      "Only straight lines",
      "C2 continuity and local controllability",
      "Only C0"
    ],
    "answer": "C2 continuity and local controllability"
  },
  {
    "q": "In the B-spline example with n = 4 control points and k = 2, the number of knots n + k is:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "5",
      "4",
      "6",
      "8"
    ],
    "answer": "6"
  },
  {
    "q": "NURBS stands for:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Non-uniform recursive Bezier spline",
      "Natural uniform rational basis spline",
      "New uniform ratio B-spline",
      "Non-uniform rational B-spline"
    ],
    "answer": "Non-uniform rational B-spline"
  },
  {
    "q": "The De Casteljau algorithm is used to:",
    "topic": "L8: Types of Splines and Rendering",
    "lecture": "L8",
    "options": [
      "Shade polygons",
      "Render Bezier curves with reduced computation",
      "Clip lines",
      "Compute colours"
    ],
    "answer": "Render Bezier curves with reduced computation"
  },
  {
    "q": "A voxel is the 3D equivalent of a:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "Texel",
      "Polygon",
      "Pixel",
      "Vertex"
    ],
    "answer": "Pixel"
  },
  {
    "q": "In the octree method, a region is divided into how many sub-regions at each step?",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "answer": "8"
  },
  {
    "q": "BSP stands for:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "Boundary Solid Partition",
      "Binary Space Partitioning",
      "Basic Surface Plane",
      "Binary Shape Pattern"
    ],
    "answer": "Binary Space Partitioning"
  },
  {
    "q": "In BSP, each recursive step divides space into:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "2 parts",
      "3 parts",
      "4 parts",
      "8 parts"
    ],
    "answer": "2 parts"
  },
  {
    "q": "The major problem with uniform voxel grids is:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "No hierarchy",
      "Too little detail",
      "Cannot store colour",
      "Large memory requirement"
    ],
    "answer": "Large memory requirement"
  },
  {
    "q": "In the modified octree, each internal node has:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "Exactly 8 children",
      "0 or 8 children",
      "Exactly 4 children",
      "1 child"
    ],
    "answer": "0 or 8 children"
  },
  {
    "q": "In the modified BSP, each node has:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "3 children",
      "0 or 2 children",
      "0 or 4 children",
      "Exactly 8 children"
    ],
    "answer": "0 or 2 children"
  },
  {
    "q": "CSG represents objects by:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "Applying Boolean operators (union, intersection, difference) on primitive shapes",
      "Sweeping curves",
      "Scanning points",
      "Dividing space"
    ],
    "answer": "Applying Boolean operators (union, intersection, difference) on primitive shapes"
  },
  {
    "q": "Ease of manipulation of a representation is particularly important in:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "Text editing",
      "Printing",
      "Animation",
      "Static images"
    ],
    "answer": "Animation"
  },
  {
    "q": "Splines are preferred over meshes for ease of acquiring data because:",
    "topic": "L9: Space Partitioning Methods",
    "lecture": "L9",
    "options": [
      "They avoid computation",
      "They are only 2D",
      "They need more control points",
      "They approximate a curved surface with fewer control points"
    ],
    "answer": "They approximate a curved surface with fewer control points"
  },
  {
    "q": "Objects are initially defined in:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "World coordinates",
      "Local/object coordinates",
      "View coordinates",
      "Device coordinates"
    ],
    "answer": "Local/object coordinates"
  },
  {
    "q": "Translation displaces a point by:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "An angle",
      "A shear factor",
      "A scale factor",
      "tx and ty along X and Y directions"
    ],
    "answer": "tx and ty along X and Y directions"
  },
  {
    "q": "By convention, positive angular movement in rotation is:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Undefined",
      "Along X only",
      "Counterclockwise",
      "Clockwise"
    ],
    "answer": "Counterclockwise"
  },
  {
    "q": "Uniform scaling means:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Only reduction",
      "Different factors along X and Y",
      "No scaling",
      "Same scaling factor along X and Y"
    ],
    "answer": "Same scaling factor along X and Y"
  },
  {
    "q": "Scaling with a factor greater than 1 results in:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "No change",
      "Reduction in size",
      "Rotation",
      "Enlargement"
    ],
    "answer": "Enlargement"
  },
  {
    "q": "Shearing changes an object's:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Position only",
      "Depth",
      "Shape",
      "Colour"
    ],
    "answer": "Shape"
  },
  {
    "q": "Shearing is strictly not a basic transformation because it can be derived from:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Rotation and scaling",
      "Projection",
      "Translation and scaling",
      "Rotation and translation"
    ],
    "answer": "Rotation and scaling"
  },
  {
    "q": "Translation, rotation, scaling and shearing are also called:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Raster operations",
      "Geometric transformations",
      "Optical transformations",
      "Colour transformations"
    ],
    "answer": "Geometric transformations"
  },
  {
    "q": "To transform an object, the transformation is applied to:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "All the points that make up its surfaces",
      "Only its centre",
      "Only the first vertex",
      "Only the colours"
    ],
    "answer": "All the points that make up its surfaces"
  },
  {
    "q": "Scaling (and shearing) may also:",
    "topic": "L10: Modeling Transformation (Basic Transformations)",
    "lecture": "L10",
    "options": [
      "Change its texture",
      "Reposition the object",
      "Remove the object",
      "Change its colour"
    ],
    "answer": "Reposition the object"
  },
  {
    "q": "Translation cannot be represented by a 2x2 matrix, so we use:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "Vectors only",
      "Homogeneous coordinate system",
      "Quaternions",
      "Polar coordinates"
    ],
    "answer": "Homogeneous coordinate system"
  },
  {
    "q": "In homogeneous coordinates a 2D point (x, y) is represented as:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "(xh, yh, h) where x = xh/h and y = yh/h",
      "(x, y, 0)",
      "(xy, h)",
      "(x, y)"
    ],
    "answer": "(xh, yh, h) where x = xh/h and y = yh/h"
  },
  {
    "q": "A homogeneous point of the form (xh, yh, 0) is considered to be:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "At (1, 1)",
      "At infinity",
      "At the origin",
      "Invalid"
    ],
    "answer": "At infinity"
  },
  {
    "q": "For geometric transformations the homogeneous factor h is:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "answer": "1"
  },
  {
    "q": "In a composite matrix, the transformation applied first is placed:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "It does not matter",
      "In the middle",
      "On the left",
      "On the rightmost side"
    ],
    "answer": "On the rightmost side"
  },
  {
    "q": "Matrix multiplication is:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "Always zero",
      "Commutative",
      "Always identity",
      "Not commutative, so sequence matters"
    ],
    "answer": "Not commutative, so sequence matters"
  },
  {
    "q": "With M = T(5,5).S(0.5,1), the vertex (2,0) is transformed to:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "(1, 0)",
      "(6, 5)",
      "(7, 5)",
      "(5, 5)"
    ],
    "answer": "(6, 5)"
  },
  {
    "q": "To scale about an arbitrary fixed point F(x, y), the composite matrix is:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "S.T",
      "S only",
      "T(-x,-y).S.T(x,y)",
      "T(x,y).S(sx,sy).T(-x,-y)"
    ],
    "answer": "T(x,y).S(sx,sy).T(-x,-y)"
  },
  {
    "q": "The three steps for transformation about an arbitrary fixed point are:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "Scale, rotate, shear",
      "Clip, shade, project",
      "Translate fixed point to origin, transform, translate back",
      "Rotate, rotate, rotate"
    ],
    "answer": "Translate fixed point to origin, transform, translate back"
  },
  {
    "q": "To get Cartesian coordinates after multiplying with a homogeneous matrix we:",
    "topic": "L11: Matrix Representation and Composition",
    "lecture": "L11",
    "options": [
      "Divide the elements by h",
      "Multiply by h",
      "Add h",
      "Subtract h"
    ],
    "answer": "Divide the elements by h"
  },
  {
    "q": "3D transformation matrices in homogeneous coordinates are of size:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "5x5",
      "4x4",
      "3x3",
      "2x2"
    ],
    "answer": "4x4"
  },
  {
    "q": "In 3D we have how many basic rotations?",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Three (about X, Y and Z axes)",
      "Six",
      "One",
      "Two"
    ],
    "answer": "Three (about X, Y and Z axes)"
  },
  {
    "q": "How many shearing factors are in the 3D shearing matrix?",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Four",
      "Two",
      "Nine",
      "Six"
    ],
    "answer": "Six"
  },
  {
    "q": "Rotation about an arbitrary axis is a composition of how many transformations?",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Two",
      "Five",
      "Seven",
      "Three"
    ],
    "answer": "Five"
  },
  {
    "q": "The first step in rotating about an arbitrary axis through P1 and P2 is:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Translation of the axis point (P2) to the origin",
      "Shearing",
      "Scaling",
      "Rotation about Z"
    ],
    "answer": "Translation of the axis point (P2) to the origin"
  },
  {
    "q": "Inverse rotations are obtained by:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Changing the sign of the angle",
      "Doubling the angle",
      "Squaring the matrix",
      "Transposing colours"
    ],
    "answer": "Changing the sign of the angle"
  },
  {
    "q": "In the partition wall example, the first transformation applied is:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "RY(90)",
      "S(1,2,2)",
      "T(-2, -2, 0) (translate centre to origin)",
      "T(0,2,2)"
    ],
    "answer": "T(-2, -2, 0) (translate centre to origin)"
  },
  {
    "q": "S(1, 2, 2) in the partition wall example means scaling by 2 in:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "Y and Z",
      "Only X",
      "X and Z",
      "X and Y"
    ],
    "answer": "Y and Z"
  },
  {
    "q": "The final matrix in the partition wall example is:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "T(0,2,2) S(1,2,2) RY(90) RZ(90) T(-2,-2,0)",
      "RZ RY S T",
      "T(-2,-2,0) S RY RZ T(0,2,2)",
      "S T RY RZ"
    ],
    "answer": "T(0,2,2) S(1,2,2) RY(90) RZ(90) T(-2,-2,0)"
  },
  {
    "q": "shxy and shxz in 3D shear along Y and Z directions, leaving:",
    "topic": "L12: 3D Transformations",
    "lecture": "L12",
    "options": [
      "x unchanged",
      "All coordinates changed",
      "z unchanged",
      "y unchanged"
    ],
    "answer": "x unchanged"
  },
  {
    "q": "The 3rd stage assigns colours to objects so that we can perceive:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Depth, creating the impression of 3D",
      "Sound",
      "Motion only",
      "Temperature"
    ],
    "answer": "Depth, creating the impression of 3D"
  },
  {
    "q": "Transport of light energy from the source to the point is called:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Rasterization",
      "Shading",
      "Illumination",
      "Clipping"
    ],
    "answer": "Illumination"
  },
  {
    "q": "Shading (surface rendering) refers to:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Modeling objects",
      "Choosing a light source",
      "Assigning colours to pixels, using interpolation",
      "Clipping edges"
    ],
    "answer": "Assigning colours to pixels, using interpolation"
  },
  {
    "q": "Which of these is NOT a typical light source in graphics?",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Directional source/spotlight",
      "Ambient light",
      "Quadric source",
      "Point source"
    ],
    "answer": "Quadric source"
  },
  {
    "q": "A point light source is characterised by:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Texture",
      "Angle only",
      "Colour only",
      "Position and intensity"
    ],
    "answer": "Position and intensity"
  },
  {
    "q": "A spotlight additionally has:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "No intensity",
      "No position",
      "An angular limit within which points are illuminated",
      "Infinite size"
    ],
    "answer": "An angular limit within which points are illuminated"
  },
  {
    "q": "Ambient light:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Has no spatial or directional characteristics, illuminating all surfaces equally",
      "Is always zero",
      "Has strong direction",
      "Is the same as a spotlight"
    ],
    "answer": "Has no spatial or directional characteristics, illuminating all surfaces equally"
  },
  {
    "q": "Ambient light exists because of:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Eye physiology",
      "Direct source only",
      "Frame buffer",
      "Indirect illumination from surrounding surfaces reflecting light"
    ],
    "answer": "Indirect illumination from surrounding surfaces reflecting light"
  },
  {
    "q": "Applying a full lighting model at every point is not used for real-time 3D because:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "It needs no CPU",
      "It gives low quality",
      "It is computation intensive",
      "Colours are limited"
    ],
    "answer": "It is computation intensive"
  },
  {
    "q": "Surface properties affecting colour include:",
    "topic": "L13: Lighting Basics",
    "lecture": "L13",
    "options": [
      "Only size",
      "Optical (reflectance, refractance) and geometric (position, orientation)",
      "Only texture",
      "Only colour"
    ],
    "answer": "Optical (reflectance, refractance) and geometric (position, orientation)"
  },
  {
    "q": "Total reflected intensity from a point is the sum of:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "Only diffuse",
      "Only specular",
      "Ambient, diffuse and specular components",
      "Only ambient"
    ],
    "answer": "Ambient, diffuse and specular components"
  },
  {
    "q": "Diffuse reflection happens from:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "Lenses",
      "Shiny smooth surfaces only",
      "Mirrors",
      "Rough or grainy surfaces, reflecting light in all directions"
    ],
    "answer": "Rough or grainy surfaces, reflecting light in all directions"
  },
  {
    "q": "Specular reflection produces:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "A bright spot for a viewer in the reflection direction",
      "Uniform colour",
      "Texture",
      "Shadow"
    ],
    "answer": "A bright spot for a viewer in the reflection direction"
  },
  {
    "q": "Reflection coefficients (ka, kd, ks) vary between:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "0.0 and 1.0",
      "0 and 255",
      "1 and 10",
      "-1 and 1"
    ],
    "answer": "0.0 and 1.0"
  },
  {
    "q": "ka is the:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "Diffuse coefficient for ambient light",
      "Scaling factor",
      "Attenuation factor",
      "Specular coefficient"
    ],
    "answer": "Diffuse coefficient for ambient light"
  },
  {
    "q": "Lambert's cosine law relates reflected energy to the cosine of the angle between:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "Two light sources",
      "Viewer and light",
      "Two normals",
      "Light direction and surface normal"
    ],
    "answer": "Light direction and surface normal"
  },
  {
    "q": "In vector form, diffuse intensity is proportional to:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "N . L (dot product of unit normal and light vector)",
      "N x L",
      "N + L",
      "N - L"
    ],
    "answer": "N . L (dot product of unit normal and light vector)"
  },
  {
    "q": "The Phong specular reflection model was proposed by Bui Tuong Phong in:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "1973",
      "1960",
      "1981",
      "1995"
    ],
    "answer": "1973"
  },
  {
    "q": "Radial attenuation is typically computed with:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "A sine function",
      "An inverse quadratic function of distance",
      "A linear function",
      "A constant"
    ],
    "answer": "An inverse quadratic function of distance"
  },
  {
    "q": "Angular attenuation is primarily used to generate:",
    "topic": "L14: Simple Lighting Model",
    "lecture": "L14",
    "options": [
      "Shadows only",
      "Ambient effect",
      "Texture",
      "Spotlight effect"
    ],
    "answer": "Spotlight effect"
  },
  {
    "q": "Shading models reduce computation by:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Removing the lighting model",
      "Computing colour at a few points and interpolating the rest",
      "Reducing resolution only",
      "Skipping colours"
    ],
    "answer": "Computing colour at a few points and interpolating the rest"
  },
  {
    "q": "Which is the simplest shading model with least computation?",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Gouraud shading",
      "Flat shading",
      "Ray tracing",
      "Phong shading"
    ],
    "answer": "Flat shading"
  },
  {
    "q": "Gouraud shading first determines:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Only the polygon colour",
      "The light position",
      "Average unit normal vector at each vertex",
      "Texels"
    ],
    "answer": "Average unit normal vector at each vertex"
  },
  {
    "q": "Gouraud shading linearly interpolates:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Normal vectors",
      "Texture coordinates",
      "Light sources",
      "Vertex intensities across the polygon"
    ],
    "answer": "Vertex intensities across the polygon"
  },
  {
    "q": "Iterative interpolation in Gouraud shading needs only:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Addition",
      "Division",
      "Square roots",
      "Multiplication"
    ],
    "answer": "Addition"
  },
  {
    "q": "A drawback of Gouraud shading is:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Works only for 1D",
      "Poor specular effects and Mach bands",
      "Too accurate",
      "Needs no vertices"
    ],
    "answer": "Poor specular effects and Mach bands"
  },
  {
    "q": "Mach bands are:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "A type of texture",
      "A hardware defect",
      "A psychological phenomenon in which bright bands appear where solid colour blocks meet",
      "A projection type"
    ],
    "answer": "A psychological phenomenon in which bright bands appear where solid colour blocks meet"
  },
  {
    "q": "Phong shading is also called:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Normal-vector interpolation rendering",
      "Intensity mapping",
      "Flat rendering",
      "Raster shading"
    ],
    "answer": "Normal-vector interpolation rendering"
  },
  {
    "q": "In Phong shading, the lighting model is applied:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "Only at vertices",
      "Only once per object",
      "Never",
      "At each projected pixel using the interpolated normal"
    ],
    "answer": "At each projected pixel using the interpolated normal"
  },
  {
    "q": "In the shelf example, the colour at P3 on a surface lit only by ambient light (ka = 0.5, Ia = 1) is:",
    "topic": "L15: Shading Models",
    "lecture": "L15",
    "options": [
      "0.25",
      "0.5",
      "0.79",
      "1.0"
    ],
    "answer": "0.5"
  },
  {
    "q": "Lighting and shading models compute intensities as real numbers between:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "0.0 and 1.0",
      "1 and 10",
      "-1 and 1",
      "0 and 255"
    ],
    "answer": "0.0 and 1.0"
  },
  {
    "q": "A frame buffer with 8 bits per pixel can represent how many intensity values?",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "64",
      "8",
      "1024",
      "256"
    ],
    "answer": "256"
  },
  {
    "q": "Our eyes perceive intensity differences in terms of:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "Absolute difference",
      "Relative difference (ratios)",
      "Frequency",
      "Wavelength only"
    ],
    "answer": "Relative difference (ratios)"
  },
  {
    "q": "In the mapping algorithm, successive device intensities must maintain a:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "Common ratio r",
      "Zero gap",
      "Common difference",
      "Random spacing"
    ],
    "answer": "Common ratio r"
  },
  {
    "q": "The dynamic range (I0 and IN) of a display can be found with a:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "Thermometer",
      "Voltmeter",
      "Photometer",
      "Oscilloscope"
    ],
    "answer": "Photometer"
  },
  {
    "q": "The highest device intensity value is usually taken as:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "255",
      "0.5",
      "1.0",
      "0.0"
    ],
    "answer": "1.0"
  },
  {
    "q": "For I0 = 0.01 and 256 levels, the common ratio r is approximately:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "1.0182",
      "2.0",
      "1.5",
      "0.5"
    ],
    "answer": "1.0182"
  },
  {
    "q": "A computed intensity is mapped to:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "A random intensity",
      "The nearest device-supported intensity",
      "The maximum value",
      "Zero"
    ],
    "answer": "The nearest device-supported intensity"
  },
  {
    "q": "Related concepts left out of this lecture are:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "Gamma correction and halftoning/dithering",
      "Octrees",
      "Rotation and shear",
      "Clipping and HSR"
    ],
    "answer": "Gamma correction and halftoning/dithering"
  },
  {
    "q": "In summary, intensity mapping converts:",
    "topic": "L16: Intensity Mapping",
    "lecture": "L16",
    "options": [
      "World to view coordinates",
      "3D to 2D",
      "Meshes to splines",
      "Computed values to device-supported values"
    ],
    "answer": "Computed values to device-supported values"
  },
  {
    "q": "Light entering the eye passes through the cornea, pupil and lens before reaching the:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Fovea only",
      "Iris",
      "Optic cable",
      "Retina"
    ],
    "answer": "Retina"
  },
  {
    "q": "The amount of light entering the eye is controlled by the:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Iris",
      "Retina",
      "Lens",
      "Cornea"
    ],
    "answer": "Iris"
  },
  {
    "q": "Cones are mainly found in a small central region of the retina called the:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Iris",
      "Fovea",
      "Lens",
      "Pupil"
    ],
    "answer": "Fovea"
  },
  {
    "q": "We perceive colours only in:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Photopic vision",
      "Both equally",
      "Scotopic vision",
      "Neither"
    ],
    "answer": "Photopic vision"
  },
  {
    "q": "Which photoreceptors work in weak light and see in shades of gray?",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Cones",
      "None",
      "Both",
      "Rods"
    ],
    "answer": "Rods"
  },
  {
    "q": "Visible light ranges from red (about 700 nm) to violet at about:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "2000 nm",
      "100 nm",
      "400 nm",
      "1000 nm"
    ],
    "answer": "400 nm"
  },
  {
    "q": "Different spectra giving the same colour sensation are called metamers, and the behaviour is called:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Dichroism",
      "Isomerism",
      "Aliasing",
      "Metamerism"
    ],
    "answer": "Metamerism"
  },
  {
    "q": "The RGB model is:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "Additive",
      "Logarithmic",
      "Linear",
      "Subtractive"
    ],
    "answer": "Additive"
  },
  {
    "q": "MIPMAP stands for Multum In Parvo, meaning:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "One thing in a big space",
      "Multiple pixel maps",
      "Maps in pixels",
      "Many things in a small space"
    ],
    "answer": "Many things in a small space"
  },
  {
    "q": "Solid texturing defines the texture in a:",
    "topic": "L17: Colour Models and Texture",
    "lecture": "L17",
    "options": [
      "2D texture space (u,w)",
      "No texture space",
      "1D texture space",
      "3D texture space (u,v,w)"
    ],
    "answer": "3D texture space (u,v,w)"
  },
  {
    "q": "The first step of the viewing pipeline is to transform the:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "Colours to intensities",
      "Scene to pixels",
      "Objects to meshes",
      "3D world coordinate scene to the view (eye/camera) coordinate system"
    ],
    "answer": "3D world coordinate scene to the view (eye/camera) coordinate system"
  },
  {
    "q": "The viewing process is simulated similar to:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "Playing music",
      "Taking a photograph",
      "Drawing a map",
      "Printing a book"
    ],
    "answer": "Taking a photograph"
  },
  {
    "q": "The three basis vectors of the view coordinate system are usually denoted by:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "a, b, c",
      "x, y, z",
      "i, j, k",
      "u, v, n"
    ],
    "answer": "u, v, n"
  },
  {
    "q": "The basis vector n is computed as:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "n = o - p",
      "n = p - o",
      "n = u x v",
      "n = o + p"
    ],
    "answer": "n = o - p"
  },
  {
    "q": "The look-at point is also called:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "Centre of interest",
      "Centre of mass",
      "Centre of projection",
      "Origin of world"
    ],
    "answer": "Centre of interest"
  },
  {
    "q": "The view-up vector is computed as:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "Vup = p - o",
      "Vup = pup - o",
      "Vup = o - pup",
      "Vup = n x u"
    ],
    "answer": "Vup = pup - o"
  },
  {
    "q": "The basis vector u is computed as:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "u = v x n",
      "u = v . n",
      "u = n x v",
      "u = v + n"
    ],
    "answer": "u = v x n"
  },
  {
    "q": "The matrix Mw2v is a composition of:",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "Scaling and shearing",
      "Projection and clipping",
      "Translation and rotation (R.T)",
      "Shading and lighting"
    ],
    "answer": "Translation and rotation (R.T)"
  },
  {
    "q": "In the example, camera at (1,2,2) and look-at point (2,2,2) give n =",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "(-1, 0, 0)",
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(0, 0, 1)"
    ],
    "answer": "(-1, 0, 0)"
  },
  {
    "q": "In the example, the object centre (2,2,2) is transformed to which point in view coordinates?",
    "topic": "L18: 3D Viewing Transformation",
    "lecture": "L18",
    "options": [
      "(0, 0, 1)",
      "(1, 2, 2)",
      "(2, 2, 2)",
      "(0, 0, -1)"
    ],
    "answer": "(0, 0, -1)"
  },
  {
    "q": "Projection in general transforms objects from:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "n dimensions to (n - 1) dimensions",
      "Colour to gray",
      "World to device",
      "2D to 3D"
    ],
    "answer": "n dimensions to (n - 1) dimensions"
  },
  {
    "q": "The area on the view plane that contains projected objects is the:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Frame buffer",
      "View volume",
      "Viewport",
      "Clipping window"
    ],
    "answer": "Clipping window"
  },
  {
    "q": "Lines from object surfaces to the view plane are called:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Projectors",
      "Normals",
      "Vertices",
      "Edges"
    ],
    "answer": "Projectors"
  },
  {
    "q": "In perspective projection the projectors:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Are parallel",
      "Never meet",
      "Are curved",
      "Converge to a centre of projection"
    ],
    "answer": "Converge to a centre of projection"
  },
  {
    "q": "In parallel projection the centre of projection is at:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "The object",
      "Infinity",
      "The origin",
      "The viewer"
    ],
    "answer": "Infinity"
  },
  {
    "q": "Perspective foreshortening means:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Objects turn upside down",
      "Distant objects appear smaller",
      "All objects equal",
      "Near objects disappear"
    ],
    "answer": "Distant objects appear smaller"
  },
  {
    "q": "Vanishing points occur in:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Octrees",
      "Parallel projection only",
      "Perspective projection",
      "Flat shading"
    ],
    "answer": "Perspective projection"
  },
  {
    "q": "Parallel projection is useful for:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Engineering drawings (CAD) as it preserves shape and size",
      "Cinema",
      "Animation",
      "Realistic games"
    ],
    "answer": "Engineering drawings (CAD) as it preserves shape and size"
  },
  {
    "q": "The view volume for perspective projection is a:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "Cylinder",
      "Sphere",
      "Cube",
      "Frustum"
    ],
    "answer": "Frustum"
  },
  {
    "q": "For parallel projection with near plane at distance d along -z, the projected z' equals:",
    "topic": "L19: Projection",
    "lecture": "L19",
    "options": [
      "d",
      "-d",
      "z",
      "0"
    ],
    "answer": "-d"
  },
  {
    "q": "The canonical view volume (CVV) for parallel projection is a cube in the range:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "[-10, 10]",
      "[-1, 1]",
      "[0, 10]",
      "[0, 1]"
    ],
    "answer": "[-1, 1]"
  },
  {
    "q": "The CVV is used to:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "Compute light",
      "Apply texture",
      "Simplify clipping calculations",
      "Increase colours"
    ],
    "answer": "Simplify clipping calculations"
  },
  {
    "q": "A perspective frustum is transformed to a parallel CVV using:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "Shearing and scaling",
      "Translation only",
      "Projection only",
      "Rotation only"
    ],
    "answer": "Shearing and scaling"
  },
  {
    "q": "The overall transformation sequence is:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "P' = Tproj . Tcvv . TVC . P",
      "P' = Tcvv . P",
      "P' = P . Tproj",
      "P' = TVC . Tproj . Tcvv . P"
    ],
    "answer": "P' = Tproj . Tcvv . TVC . P"
  },
  {
    "q": "The depth (z) value is preserved in the z-buffer because it is needed for:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "Translation",
      "Colour",
      "Scaling",
      "Hidden surface removal"
    ],
    "answer": "Hidden surface removal"
  },
  {
    "q": "The clipping window on the CVV is called the:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "Viewport",
      "Normalized window",
      "Frame",
      "Raster window"
    ],
    "answer": "Normalized window"
  },
  {
    "q": "The viewport is defined in:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "Object space",
      "Device space",
      "World space",
      "Texture space"
    ],
    "answer": "Device space"
  },
  {
    "q": "Parallel projection of the point (0,0,-1) onto the plane z = -0.5 gives:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "(0, 0, -1)",
      "(0, 0, -0.5)",
      "(1, 1, 1)",
      "(0, 0, 0.5)"
    ],
    "answer": "(0, 0, -0.5)"
  },
  {
    "q": "In the perspective example the homogeneous factor h obtained is:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "-2",
      "2",
      "1",
      "0"
    ],
    "answer": "-2"
  },
  {
    "q": "For the window-to-viewport example (window [-1,1]x[-1,1], viewport (4,4) to (6,8)), the point (0,0) maps to:",
    "topic": "L20: Canonical View Volume and Viewport",
    "lecture": "L20",
    "options": [
      "(4, 4)",
      "(5, 6)",
      "(6, 8)",
      "(0, 0)"
    ],
    "answer": "(5, 6)"
  },
  {
    "q": "The process of discarding objects that lie outside the view volume is called:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Shading",
      "Clipping",
      "Rasterization",
      "Texture mapping"
    ],
    "answer": "Clipping"
  },
  {
    "q": "The clipping algorithms discussed assume clipping is done against the:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Canonical view volume (cube)",
      "World coordinate system",
      "Viewport only",
      "Frame buffer"
    ],
    "answer": "Canonical view volume (cube)"
  },
  {
    "q": "A point (x, y) is retained in 2D point clipping if:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "wxmin <= x <= wxmax AND wymin <= y <= wymax",
      "x = y",
      "x > wxmax",
      "y < wymin"
    ],
    "answer": "wxmin <= x <= wxmax AND wymin <= y <= wymax"
  },
  {
    "q": "The Cohen-Sutherland algorithm divides the window and its surrounding into how many regions?",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "16",
      "9",
      "6",
      "4"
    ],
    "answer": "9"
  },
  {
    "q": "Each Cohen-Sutherland region code has how many bits (above, below, right, left)?",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "8",
      "2",
      "6",
      "4"
    ],
    "answer": "4"
  },
  {
    "q": "If both end point region codes are 0000, the line is:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Completely inside, retain",
      "Partially inside",
      "Needs rotation",
      "Completely outside, discard"
    ],
    "answer": "Completely inside, retain"
  },
  {
    "q": "If the bitwise AND of the two end point codes is NOT 0000, the line is:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Retained after shading",
      "Partially inside",
      "Completely outside, so discard it",
      "Completely inside"
    ],
    "answer": "Completely outside, so discard it"
  },
  {
    "q": "For segment AB with both end point codes 0010, the AND is 0010. What is the result?",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Line is clipped at the left boundary",
      "Line is totally outside, discard",
      "Line is rotated",
      "Line is retained"
    ],
    "answer": "Line is totally outside, discard"
  },
  {
    "q": "Cohen-Sutherland works best when:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "The window is circular",
      "Many lines can be clipped without further processing",
      "Few lines can be trivially accepted or rejected",
      "All lines cross the window"
    ],
    "answer": "Many lines can be clipped without further processing"
  },
  {
    "q": "The earliest faster line clipping algorithm based on the parametric line equation was proposed by:",
    "topic": "L21: Clipping Basics, Line Clipping (Cohen-Sutherland)",
    "lecture": "L21",
    "options": [
      "Gouraud",
      "Warnock",
      "Cyrus and Beck",
      "Bresenham"
    ],
    "answer": "Cyrus and Beck"
  },
  {
    "q": "Two efficient fill-area (polygon) clipping algorithms discussed are:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "Cohen-Sutherland and DDA",
      "Painter and Warnock",
      "Gouraud and Phong",
      "Sutherland-Hodgeman and Weiler-Atherton"
    ],
    "answer": "Sutherland-Hodgeman and Weiler-Atherton"
  },
  {
    "q": "In Sutherland-Hodgeman, the polygon vertex list is passed through how many clippers (for a 2D window)?",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "Eight",
      "Four",
      "Three",
      "Two"
    ],
    "answer": "Four"
  },
  {
    "q": "In Sutherland-Hodgeman, if vi is inside and vj is outside a clipper, the output is:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "vi and vj",
      "NULL",
      "The intersection point of the edge with the clipper",
      "vj"
    ],
    "answer": "The intersection point of the edge with the clipper"
  },
  {
    "q": "If vi is outside and vj is inside the clipper, the output is:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "Only vi",
      "Only vj",
      "NULL",
      "The intersection point and vj"
    ],
    "answer": "The intersection point and vj"
  },
  {
    "q": "If both vertices of an edge are outside the clipper, the output is:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "vj",
      "The intersection point",
      "NULL",
      "Both vertices"
    ],
    "answer": "NULL"
  },
  {
    "q": "Sutherland-Hodgeman works well when the fill-area is:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "A convex polygon clipped against a rectangular window",
      "A curve",
      "Any concave polygon",
      "A circle"
    ],
    "answer": "A convex polygon clipped against a rectangular window"
  },
  {
    "q": "Weiler-Atherton can clip:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "Only lines",
      "Only convex polygons",
      "Only rectangles",
      "Any polygon (convex or concave) against any polygonal clipping window"
    ],
    "answer": "Any polygon (convex or concave) against any polygonal clipping window"
  },
  {
    "q": "In Weiler-Atherton, at an inside-to-outside intersection we follow:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "Window (clip) boundaries in the same direction",
      "Random edges",
      "The normal vector",
      "Polygon edges"
    ],
    "answer": "Window (clip) boundaries in the same direction"
  },
  {
    "q": "In 3D Cohen-Sutherland, the number of regions and code bits are:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "16 regions and 5 bits",
      "27 regions and 6 bits",
      "9 regions and 4 bits",
      "8 regions and 3 bits"
    ],
    "answer": "27 regions and 6 bits"
  },
  {
    "q": "A 3D point is kept in the normalized view volume if:",
    "topic": "L22: Fill-Area Clipping and 3D Clipping",
    "lecture": "L22",
    "options": [
      "-1 <= x <= 1 AND -1 <= y <= 1 AND -1 <= z <= 1",
      "x > 1",
      "z < -1 only",
      "x = y = z"
    ],
    "answer": "-1 <= x <= 1 AND -1 <= y <= 1 AND -1 <= z <= 1"
  },
  {
    "q": "Hidden surface removal is needed because:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Objects have no depth",
      "Clipping cannot remove objects that are inside the view volume but blocked by others",
      "It replaces projection",
      "Clipping removes colour"
    ],
    "answer": "Clipping cannot remove objects that are inside the view volume but blocked by others"
  },
  {
    "q": "HSR methods are broadly of which two types?",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Object space and image space",
      "Local and global",
      "Raster and vector",
      "Lighting and shading"
    ],
    "answer": "Object space and image space"
  },
  {
    "q": "Object space HSR methods:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Work at each pixel after rasterization",
      "Compare objects and parts of objects before projection",
      "Need no computation",
      "Depend on screen resolution"
    ],
    "answer": "Compare objects and parts of objects before projection"
  },
  {
    "q": "Image space HSR methods decide visibility:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Using clipping only",
      "Only for lines",
      "Per object",
      "Point by point at each pixel position"
    ],
    "answer": "Point by point at each pixel position"
  },
  {
    "q": "Coherence in HSR refers to:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Random sampling",
      "Using results computed for one part of the scene for nearby parts",
      "Increasing resolution",
      "Colour matching"
    ],
    "answer": "Using results computed for one part of the scene for nearby parts"
  },
  {
    "q": "Edge coherence says that the visibility of an edge changes only when:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "It is coloured",
      "It crosses another edge",
      "It moves",
      "It is clipped"
    ],
    "answer": "It crosses another edge"
  },
  {
    "q": "In back face elimination, with surface normal N(a, b, c), a surface is eliminated if:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "c <= 0",
      "a > 0",
      "b = 0",
      "c > 0"
    ],
    "answer": "c <= 0"
  },
  {
    "q": "In the example, z components of normals are -12, -4, 4, 2 for ACB, ADB, DCB, ADC. Which surfaces are visible?",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "All four",
      "ACB and ADB",
      "None",
      "DCB and ADC"
    ],
    "answer": "DCB and ADC"
  },
  {
    "q": "The Z-buffer (depth buffer) algorithm is an image space method and its buffer has the same size as the:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Octree",
      "Texture",
      "Viewport border",
      "Frame buffer"
    ],
    "answer": "Frame buffer"
  },
  {
    "q": "A limitation of the depth-buffer method is that it cannot handle:",
    "topic": "L23: Hidden Surface Removal, Back Face Elimination, Z-buffer",
    "lecture": "L23",
    "options": [
      "Opaque surfaces",
      "Planes",
      "Polygons",
      "Transparent surfaces (A-buffer was developed to overcome this)"
    ],
    "answer": "Transparent surfaces (A-buffer was developed to overcome this)"
  },
  {
    "q": "The depth sorting algorithm is often called:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Bresenham's algorithm",
      "Phong's algorithm",
      "Gouraud's algorithm",
      "Painter's algorithm"
    ],
    "answer": "Painter's algorithm"
  },
  {
    "q": "In painter's algorithm, surfaces are rendered starting from the surface with:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Largest area",
      "Minimum depth",
      "Maximum depth (farthest)",
      "Random depth"
    ],
    "answer": "Maximum depth (farthest)"
  },
  {
    "q": "Two surfaces have no depth overlap if:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "They share an edge",
      "Min depth of one surface > max depth of the other",
      "They are both polygons",
      "Both have the same depth"
    ],
    "answer": "Min depth of one surface > max depth of the other"
  },
  {
    "q": "If all the overlap tests fail in painter's algorithm, we:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Stop the program",
      "Discard both surfaces",
      "Swap (reorder) the surfaces in the list",
      "Render with white colour"
    ],
    "answer": "Swap (reorder) the surfaces in the list"
  },
  {
    "q": "To avoid an infinite loop for intersecting surfaces, painter's algorithm uses:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Anti-aliasing",
      "A bigger frame buffer",
      "A Boolean flag per surface and divides the surface along the intersection line",
      "Shading"
    ],
    "answer": "A Boolean flag per surface and divides the surface along the intersection line"
  },
  {
    "q": "Warnock's algorithm first subdivides the screen area into:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "4 equal squares",
      "8 cubes",
      "9 regions",
      "2 parts"
    ],
    "answer": "4 equal squares"
  },
  {
    "q": "In Warnock's algorithm Case 1 (region contains no surface):",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Assign the background colour and do not subdivide",
      "Discard the scene",
      "Subdivide further",
      "Assign surface colour"
    ],
    "answer": "Assign the background colour and do not subdivide"
  },
  {
    "q": "Warnock's Case 2 (nearest surface completely overlaps the region):",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Assign background colour",
      "Assign the surface colour to the region",
      "Subdivide",
      "Remove the surface"
    ],
    "answer": "Assign the surface colour to the region"
  },
  {
    "q": "Warnock's recursion stops when a case is met or the region size becomes:",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Zero",
      "Infinite",
      "Equal to pixel size",
      "Equal to screen size"
    ],
    "answer": "Equal to pixel size"
  },
  {
    "q": "Which pair is correctly classified?",
    "topic": "L24: Painter's Algorithm and Warnock's Algorithm",
    "lecture": "L24",
    "options": [
      "Back face elimination - object space; Z-buffer - image space",
      "Back face elimination - image space; Warnock - object space",
      "Painter - only image space",
      "Z-buffer - object space; Warnock - object space"
    ],
    "answer": "Back face elimination - object space; Z-buffer - image space"
  },
  {
    "q": "The initial decision parameter p0 in Bresenham's line algorithm is:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "dx + dy",
      "dy - dx",
      "2dy - dx",
      "2dx - dy"
    ],
    "answer": "2dy - dx"
  },
  {
    "q": "Bresenham's algorithm is efficient because the decision parameter uses only:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "Integer operations",
      "Floating point operations",
      "Trigonometry",
      "Square roots"
    ],
    "answer": "Integer operations"
  },
  {
    "q": "In Bresenham's algorithm, if pk < 0 we choose:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "Both pixels",
      "The lower pixel (yk)",
      "The upper pixel (yk + 1)",
      "No pixel"
    ],
    "answer": "The lower pixel (yk)"
  },
  {
    "q": "For line A(2,2) to B(7,5), the pixel list is (2,2),(3,3),(4,3),(5,4),(6,4),(7,5). The next pixel after (4,3) is:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "(4,4)",
      "(5,3)",
      "(5,5)",
      "(5,4)"
    ],
    "answer": "(5,4)"
  },
  {
    "q": "DDA reduces multiplication but still needs:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "Floating point addition and rounding",
      "Square roots",
      "No arithmetic",
      "Only integer addition"
    ],
    "answer": "Floating point addition and rounding"
  },
  {
    "q": "The basic Bresenham algorithm assumes the slope m is in:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "m > 1 only",
      "Any value",
      "0 <= m <= 1 or -1 <= m <= 0",
      "m < -1 only"
    ],
    "answer": "0 <= m <= 1 or -1 <= m <= 0"
  },
  {
    "q": "The circle midpoint algorithm uses which property of the circle?",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "Texture",
      "Colour",
      "Eight-way symmetry",
      "Convexity"
    ],
    "answer": "Eight-way symmetry"
  },
  {
    "q": "The decision variable in the midpoint circle algorithm is evaluated at:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "(0, 0)",
      "(xk + 2, yk)",
      "(xk + 1, yk - 1/2)",
      "(xk, yk)"
    ],
    "answer": "(xk + 1, yk - 1/2)"
  },
  {
    "q": "In the midpoint circle algorithm, if pk < 0 the next pixel is (xk + 1, yk) and:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "p(k+1) = 0",
      "p(k+1) = pk + 2(xk - yk) + 5",
      "p(k+1) = pk + 2xk + 3",
      "p(k+1) = pk"
    ],
    "answer": "p(k+1) = pk + 2xk + 3"
  },
  {
    "q": "In the circle example with r = 2.7, the output list contains duplicate pixels, which are:",
    "topic": "L26: Line (Bresenham) and Circle (Midpoint) Rendering",
    "lecture": "L26",
    "options": [
      "Removed before rendering",
      "Moved to the centre",
      "Doubled in colour",
      "Kept as they are"
    ],
    "answer": "Removed before rendering"
  },
  {
    "q": "Regions are broadly defined in terms of:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Colour and texture",
      "Pixel-level definition and geometric definition",
      "Light and shade",
      "2D and 3D"
    ],
    "answer": "Pixel-level definition and geometric definition"
  },
  {
    "q": "The seed fill algorithm works on:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Only circles",
      "Only polygons",
      "A boundary-defined region and uses a stack, starting from an interior seed pixel",
      "Texture"
    ],
    "answer": "A boundary-defined region and uses a stack, starting from an interior seed pixel"
  },
  {
    "q": "The 4-connected neighbours of a pixel are its:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "All 8 surrounding pixels",
      "Top, bottom, left and right pixels",
      "Only the top pixel",
      "Diagonal pixels only"
    ],
    "answer": "Top, bottom, left and right pixels"
  },
  {
    "q": "Flood fill differs from seed fill because it makes decisions based on:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Boundary colour",
      "Texture",
      "The original interior colour of the current pixel",
      "Depth"
    ],
    "answer": "The original interior colour of the current pixel"
  },
  {
    "q": "The scan line polygon fill algorithm works on:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Seed pixels",
      "Pixel definition only",
      "Geometric definition (vertices and edges)",
      "Octrees"
    ],
    "answer": "Geometric definition (vertices and edges)"
  },
  {
    "q": "For concave polygons, scan line fill needs an additional:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Texture map",
      "Projection",
      "Inside-outside test for each pixel",
      "Lighting model"
    ],
    "answer": "Inside-outside test for each pixel"
  },
  {
    "q": "In the inside-outside test, if the line from pixel p to an outside point crosses polygon edges an even number of times, p is:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Inside",
      "On the boundary",
      "Invalid",
      "Outside"
    ],
    "answer": "Outside"
  },
  {
    "q": "A 'font' or typeface denotes:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "The colour of text",
      "The overall design style of characters (e.g. Times New Roman, Arial)",
      "The screen resolution",
      "The size of a character"
    ],
    "answer": "The overall design style of characters (e.g. Times New Roman, Arial)"
  },
  {
    "q": "One DTP (postscript) point equals:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "1/96 inch",
      "1 inch",
      "1/12 inch",
      "1/72 inch"
    ],
    "answer": "1/72 inch"
  },
  {
    "q": "Compared with bitmapped fonts, outline fonts:",
    "topic": "L27: Fill-Area and Character Rendering",
    "lecture": "L27",
    "options": [
      "Are always faster",
      "Need less storage, can be transformed and are resolution independent, but render slower",
      "Need more storage and depend on resolution",
      "Cannot be resized"
    ],
    "answer": "Need less storage, can be transformed and are resolution independent, but render slower"
  },
  {
    "q": "Graphics operations are suited to a GPU because they are:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Highly parallel",
      "Text based",
      "Not computational",
      "Strictly serial"
    ],
    "answer": "Highly parallel"
  },
  {
    "q": "A GPU is a multicore system whose cores are grouped to form:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Display lists",
      "Raster units",
      "Streaming multiprocessors (SM)",
      "Frame buffers"
    ],
    "answer": "Streaming multiprocessors (SM)"
  },
  {
    "q": "Geometric transformation of many vertices is an example of:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "SIMD (single instruction, multiple data)",
      "Serial processing",
      "SISD",
      "MIMD only"
    ],
    "answer": "SIMD (single instruction, multiple data)"
  },
  {
    "q": "In the GPU pipeline, triangles are sent to the GPU:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "As text",
      "One vertex at a time through the graphics library API",
      "All at once as an image",
      "As pixels"
    ],
    "answer": "One vertex at a time through the graphics library API"
  },
  {
    "q": "In rasterization, GPUs exploit the fact that:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Only edges matter",
      "Pixels depend on each other",
      "Each pixel can be treated independently, so pixels are processed in parallel",
      "All pixels have the same colour"
    ],
    "answer": "Each pixel can be treated independently, so pixels are processed in parallel"
  },
  {
    "q": "For hidden surface removal modern GPUs implement:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Painter's algorithm",
      "Depth (Z) buffer algorithm in dedicated memory",
      "Warnock's algorithm",
      "Back face only"
    ],
    "answer": "Depth (Z) buffer algorithm in dedicated memory"
  },
  {
    "q": "Early GPUs had a fixed-function pipeline, while modern GPUs:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Have only one core",
      "Cannot do lighting",
      "Are programmable (unified grid of shaders)",
      "Have no pipeline"
    ],
    "answer": "Are programmable (unified grid of shaders)"
  },
  {
    "q": "Vertex shaders are used for:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Modeling transformations, lighting and projection of vertices",
      "Audio",
      "Compression",
      "Pixel texture only"
    ],
    "answer": "Modeling transformations, lighting and projection of vertices"
  },
  {
    "q": "Fragment shaders perform:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "Pixel processing such as shading, texture mapping and HSR decisions",
      "Mesh creation",
      "Clipping of lines",
      "Vertex projection"
    ],
    "answer": "Pixel processing such as shading, texture mapping and HSR decisions"
  },
  {
    "q": "Using a GPU for tasks not related to graphics is called:",
    "topic": "L30: GPU and Shaders",
    "lecture": "L30",
    "options": [
      "CAD",
      "GPGPU",
      "SGI",
      "SIMD"
    ],
    "answer": "GPGPU"
  },
  {
    "q": "Graphics software is broadly of which two types?",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "Raster and vector",
      "Free and paid",
      "2D and 3D",
      "Special-purpose packages and general programming packages"
    ],
    "answer": "Special-purpose packages and general programming packages"
  },
  {
    "q": "The first graphics software standard (1984) was:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "PHIGS",
      "OpenGL",
      "DirectX",
      "GKS"
    ],
    "answer": "GKS"
  },
  {
    "q": "OpenGL evolved from the graphics library (GL) of:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "IBM",
      "Intel",
      "Microsoft",
      "Silicon Graphics Inc. (SGI)"
    ],
    "answer": "Silicon Graphics Inc. (SGI)"
  },
  {
    "q": "Core OpenGL does not support I/O, so display windows are created using:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "GLUT (OpenGL Utility Toolkit)",
      "GKS",
      "Java",
      "STDIO"
    ],
    "answer": "GLUT (OpenGL Utility Toolkit)"
  },
  {
    "q": "glutInitDisplayMode(GLUT_SINGLE OR GLUT_RGB) specifies:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "Window size",
      "Background colour",
      "Double buffer and gray mode",
      "A single refresh buffer and RGB colour mode"
    ],
    "answer": "A single refresh buffer and RGB colour mode"
  },
  {
    "q": "glutMainLoop() must be:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "The last function in main, putting the program in an infinite event loop",
      "The first call in main",
      "Optional",
      "Called inside createLine"
    ],
    "answer": "The last function in main, putting the program in an infinite event loop"
  },
  {
    "q": "glClearColor(1.0, 1.0, 1.0, 0.0) sets the window background to:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "Black",
      "Green",
      "Red",
      "White"
    ],
    "answer": "White"
  },
  {
    "q": "The fourth argument of glClearColor is the:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "Depth",
      "Alpha value (blending parameter)",
      "Brightness",
      "Size"
    ],
    "answer": "Alpha value (blending parameter)"
  },
  {
    "q": "gluOrtho2D(0.0, 800.0, 0.0, 600.0) specifies:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "A perspective frustum",
      "A light source",
      "An orthogonal projection window with lower-left (0,0) and top-right (800,600)",
      "The font size"
    ],
    "answer": "An orthogonal projection window with lower-left (0,0) and top-right (800,600)"
  },
  {
    "q": "glColor3f(0.0, 1.0, 0.0) sets the colour to:",
    "topic": "L31: Graphics Software and OpenGL",
    "lecture": "L31",
    "options": [
      "Red",
      "Green",
      "White",
      "Blue"
    ],
    "answer": "Green"
  },
  {
    "q": "The word 'animation' comes from the Latin 'anima', meaning:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "To draw",
      "To record",
      "To impart life, motion or activity",
      "To paint"
    ],
    "answer": "To impart life, motion or activity"
  },
  {
    "q": "An animation is a sequence of frames, typically played at:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "1 to 5 fps",
      "24 to 60 frames per second",
      "200 fps",
      "0.5 fps"
    ],
    "answer": "24 to 60 frames per second"
  },
  {
    "q": "In storyboarding, the animator:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Preplans the sequence with rough sketches of objects in each frame",
      "Compresses video",
      "Records real motion",
      "Solves equations"
    ],
    "answer": "Preplans the sequence with rough sketches of objects in each frame"
  },
  {
    "q": "The 'straight ahead' method means:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Frames are drawn backwards",
      "Only key poses are drawn",
      "Frames are hand-drawn one after another in order",
      "Frames are auto-generated"
    ],
    "answer": "Frames are hand-drawn one after another in order"
  },
  {
    "q": "Which is NOT one of the four classes of computer animation?",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Keyframing",
      "Motion capture",
      "Physics-based",
      "Image compression"
    ],
    "answer": "Image compression"
  },
  {
    "q": "In keyframing, the animator sets keys and the computer:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Deletes frames",
      "Solves collisions",
      "Interpolates the in-between frames",
      "Records motion"
    ],
    "answer": "Interpolates the in-between frames"
  },
  {
    "q": "Motion capture means:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Recording the motion of a real subject and mapping it onto a synthetic model",
      "Drawing by hand",
      "Using only splines",
      "Generating frames by rules"
    ],
    "answer": "Recording the motion of a real subject and mapping it onto a synthetic model"
  },
  {
    "q": "Physics-based animation solves:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Only colour equations",
      "Differential equations of motion with forces and masses, and is computationally expensive",
      "Simple rules",
      "Hash tables"
    ],
    "answer": "Differential equations of motion with forces and masses, and is computationally expensive"
  },
  {
    "q": "Procedural animation:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Uses cameras",
      "Approximates complex processes with rules; cheaper but less flexible",
      "Is the most accurate",
      "Needs no computation"
    ],
    "answer": "Approximates complex processes with rules; cheaper but less flexible"
  },
  {
    "q": "The principles of animation were summarised by:",
    "topic": "L32: Animation: Introduction and Classes",
    "lecture": "L32",
    "options": [
      "Ivan Sutherland in 1963",
      "John Lasseter in 1987",
      "Ted Nelson in 1965",
      "Bui Tuong Phong in 1973"
    ],
    "answer": "John Lasseter in 1987"
  },
  {
    "q": "Which principle is described as the most critical component of any animation?",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Arcs",
      "Exaggeration",
      "Timing",
      "Appeal"
    ],
    "answer": "Timing"
  },
  {
    "q": "In timing, a slow-moving object is perceived as:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Invisible",
      "Lighter",
      "Transparent",
      "Heavier"
    ],
    "answer": "Heavier"
  },
  {
    "q": "The three parts of an action are:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Pose, frame, key",
      "Anticipation, action, follow-through",
      "Timing, arcs, appeal",
      "Squash, stretch, arcs"
    ],
    "answer": "Anticipation, action, follow-through"
  },
  {
    "q": "Follow-through is:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "A secondary action",
      "A type of camera",
      "The gradual termination of an action",
      "The preparation before an action"
    ],
    "answer": "The gradual termination of an action"
  },
  {
    "q": "A cloth flowing as a person runs is an example of:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Secondary action",
      "Anticipation",
      "Straight ahead",
      "Timing"
    ],
    "answer": "Secondary action"
  },
  {
    "q": "Squash and stretch means:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "The object disappears",
      "The object is rotated",
      "The object is coloured",
      "The object shape deforms to reflect motion and force"
    ],
    "answer": "The object shape deforms to reflect motion and force"
  },
  {
    "q": "The 'arcs' principle says realistic motion paths are:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Always straight",
      "Random",
      "Curved rather than straight lines",
      "Circular only"
    ],
    "answer": "Curved rather than straight lines"
  },
  {
    "q": "'Slow in and out' means motion should:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Start and end gradually (acceleration, cruise, deceleration)",
      "Be reversed",
      "Be instantaneous",
      "Be constant speed"
    ],
    "answer": "Start and end gradually (acceleration, cruise, deceleration)"
  },
  {
    "q": "The pose-to-pose method is the basis of:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Collision detection",
      "Motion capture",
      "Keyframing",
      "Compression"
    ],
    "answer": "Keyframing"
  },
  {
    "q": "Exaggeration is used to:",
    "topic": "L33: Principles of Animation",
    "lecture": "L33",
    "options": [
      "Reduce realism to zero",
      "Delete frames",
      "Push effects beyond reality to make the animation more appealing",
      "Remove arcs"
    ],
    "answer": "Push effects beyond reality to make the animation more appealing"
  },
  {
    "q": "Keyframing happens in two stages:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "Model and render",
      "Computer picks keyframes, animator draws",
      "Animator picks keyframes, computer generates in-betweens",
      "Record and compress"
    ],
    "answer": "Animator picks keyframes, computer generates in-betweens"
  },
  {
    "q": "Parameters specified at each keyframe are called:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "Articulation variables",
      "Texels",
      "Voxels",
      "Knots"
    ],
    "answer": "Articulation variables"
  },
  {
    "q": "Linear interpolation between two keyframes gives:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "A smooth curve",
      "A straight-line path with constant speed",
      "A circle",
      "No motion"
    ],
    "answer": "A straight-line path with constant speed"
  },
  {
    "q": "Arcs in animation are achieved using which interpolation?",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "Random",
      "No interpolation",
      "Spline interpolation",
      "Linear interpolation"
    ],
    "answer": "Spline interpolation"
  },
  {
    "q": "In a skeleton-based representation, the skeleton is:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "The visible layer",
      "A tree (hierarchy) of bone joints used as an internal data structure",
      "A texture",
      "A light"
    ],
    "answer": "A tree (hierarchy) of bone joints used as an internal data structure"
  },
  {
    "q": "In forward kinematics the animator specifies:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "The motion of every joint",
      "Only the end joint",
      "Only the skin",
      "Only the root"
    ],
    "answer": "The motion of every joint"
  },
  {
    "q": "In inverse kinematics the animator specifies:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "Nothing",
      "Only the end joints (e.g. wrist, ankle) and the computer solves the intermediate joints",
      "Only the colours",
      "All joints"
    ],
    "answer": "Only the end joints (e.g. wrist, ankle) and the computer solves the intermediate joints"
  },
  {
    "q": "A catch of inverse kinematics is that:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "It needs no constraints",
      "It cannot work for legs",
      "The intermediate joint solution may not be unique and may look unnatural",
      "It is too slow always"
    ],
    "answer": "The intermediate joint solution may not be unique and may look unnatural"
  },
  {
    "q": "Skin is attached to the skeleton by:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "Shearing",
      "Scaling",
      "Linking each skin point to the nearest joint so it moves with the joint",
      "Painting"
    ],
    "answer": "Linking each skin point to the nearest joint so it moves with the joint"
  },
  {
    "q": "The skeleton is never rendered; the viewer sees:",
    "topic": "L34: Keyframing and Character Animation",
    "lecture": "L34",
    "options": [
      "The data tree",
      "The skin deformation",
      "The bones",
      "The joints"
    ],
    "answer": "The skin deformation"
  },
  {
    "q": "Conformational parameters of a face define:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "The dynamic expression",
      "The colour",
      "The static shape (e.g. nose length, jaw width)",
      "The lighting"
    ],
    "answer": "The static shape (e.g. nose length, jaw width)"
  },
  {
    "q": "Expressive parameters define:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Static shape",
      "Texture",
      "Skeleton",
      "Dynamic facial change (e.g. eye opening, head rotation)"
    ],
    "answer": "Dynamic facial change (e.g. eye opening, head rotation)"
  },
  {
    "q": "FACS stands for:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Frame Action Control Scheme",
      "Fast Animation Control System",
      "Face And Color Space",
      "Facial Action Coding System"
    ],
    "answer": "Facial Action Coding System"
  },
  {
    "q": "FACS expresses any face as a combination of:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Action units (AUs)",
      "Markers",
      "Splines",
      "Voxels"
    ],
    "answer": "Action units (AUs)"
  },
  {
    "q": "Deformation is also called:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Morphing",
      "Clipping",
      "Scanning",
      "Shading"
    ],
    "answer": "Morphing"
  },
  {
    "q": "In the tapered cube example, Y and Z are scaled by a function S(x) that:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Increases forever",
      "Decreases along x",
      "Is constant",
      "Is zero everywhere"
    ],
    "answer": "Decreases along x"
  },
  {
    "q": "The simple deformation function approach has the problem that:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "It has no matrix",
      "It needs no points",
      "It is hard to find a function for arbitrary deformation and it applies to the whole object",
      "It is too local"
    ],
    "answer": "It is hard to find a function for arbitrary deformation and it applies to the whole object"
  },
  {
    "q": "In Free Form Deformation (FFD) the object region is enclosed in:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "A mesh of triangles only",
      "A sphere",
      "A coordinate lattice (grid of control points)",
      "A texture"
    ],
    "answer": "A coordinate lattice (grid of control points)"
  },
  {
    "q": "Which is the correct FFD sequence?",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "Distort first, then build lattice",
      "Interpolate, then build",
      "Render, then deform",
      "Build lattice, re-express object points relative to grid, distort lattice, interpolate object points"
    ],
    "answer": "Build lattice, re-express object points relative to grid, distort lattice, interpolate object points"
  },
  {
    "q": "The main advantage of FFD is:",
    "topic": "L35: Facial Animation and Deformation",
    "lecture": "L35",
    "options": [
      "It removes keyframes",
      "It only works for whole objects",
      "Local control of deformation on any region",
      "It needs no lattice"
    ],
    "answer": "Local control of deformation on any region"
  },
  {
    "q": "Motion capture records motion of a 'talent', which means:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "A camera",
      "The subject whose motion is recorded",
      "A model file",
      "A light"
    ],
    "answer": "The subject whose motion is recorded"
  },
  {
    "q": "In magnetic motion capture, the main problem is:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Markers hidden",
      "Low accuracy always",
      "Interference from nearby objects and the inconvenience of cables or battery",
      "No sensors"
    ],
    "answer": "Interference from nearby objects and the inconvenience of cables or battery"
  },
  {
    "q": "Optical motion capture uses:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Microphones",
      "Light pens",
      "Magnetic sensors",
      "Reflective markers filmed by two or more cameras"
    ],
    "answer": "Reflective markers filmed by two or more cameras"
  },
  {
    "q": "Optical mocap is less accurate mainly because of:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Magnetic fields",
      "Marker occlusion and image processing limits",
      "Cables",
      "No cameras"
    ],
    "answer": "Marker occlusion and image processing limits"
  },
  {
    "q": "Compared with optical, magnetic mocap is:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Always optical",
      "Less accurate and cheaper",
      "More accurate but more cumbersome",
      "Cheaper and lighter"
    ],
    "answer": "More accurate but more cumbersome"
  },
  {
    "q": "Physics-based animation requires solving:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Only linear equations",
      "No equations",
      "Colour tables",
      "Differential equations from physical laws"
    ],
    "answer": "Differential equations from physical laws"
  },
  {
    "q": "In the wrinkled cloth example, the physics-based approach:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Needs no computation",
      "Models stress and strain of each thread, allowing any wrinkle pattern but at high cost",
      "Imposes fixed wrinkles",
      "Uses markers"
    ],
    "answer": "Models stress and strain of each thread, allowing any wrinkle pattern but at high cost"
  },
  {
    "q": "Imposition of wrinkles is an example of:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Physics-based technique",
      "Motion capture",
      "FFD",
      "A procedural technique (cheap but inflexible)"
    ],
    "answer": "A procedural technique (cheap but inflexible)"
  },
  {
    "q": "Procedural techniques are preferred when:",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "Never",
      "No rules exist",
      "Maximum realism is needed at any cost",
      "Real-time constraints or limited compute exist and the phenomenon is well characterized"
    ],
    "answer": "Real-time constraints or limited compute exist and the phenomenon is well characterized"
  },
  {
    "q": "FACS (Ekman and Friesen) is from which year?",
    "topic": "L36: Motion Capture, Physics-Based and Procedural Animation",
    "lecture": "L36",
    "options": [
      "1987",
      "1963",
      "2008",
      "1978"
    ],
    "answer": "1978"
  },
  {
    "q": "Multimedia is content represented in:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Only text",
      "Only audio",
      "Many forms (text, image, animation, video, sound) usually with interactivity",
      "Only images"
    ],
    "answer": "Many forms (text, image, animation, video, sound) usually with interactivity"
  },
  {
    "q": "Which is NOT one of the four aspects of multimedia?",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Compilation of source code",
      "Representation",
      "Content creation",
      "Search and retrieval"
    ],
    "answer": "Compilation of source code"
  },
  {
    "q": "The term 'hypertext' was coined by:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Harry Nyquist",
      "John Lasseter",
      "Ted Nelson in 1965",
      "Ivan Sutherland"
    ],
    "answer": "Ted Nelson in 1965"
  },
  {
    "q": "Hypermedia is:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "A compression method",
      "Only audio",
      "Linear video",
      "Multimedia accessed non-linearly via links; the WWW is its best-known example"
    ],
    "answer": "Multimedia accessed non-linearly via links; the WWW is its best-known example"
  },
  {
    "q": "HTML differs from XML in that HTML:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Is binary",
      "Allows user-defined tags",
      "Uses a predefined set of tags",
      "Has no tags"
    ],
    "answer": "Uses a predefined set of tags"
  },
  {
    "q": "The multimedia production cycle is:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Flowchart, deploy, storyboard",
      "Deploy, storyboard, test",
      "Storyboard, flowchart, functional specification, prototype and test, deploy",
      "Prototype, storyboard, spec"
    ],
    "answer": "Storyboard, flowchart, functional specification, prototype and test, deploy"
  },
  {
    "q": "A storyboard is equivalent to:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "The compiled code",
      "The audio",
      "The final video",
      "The keyframes of a video"
    ],
    "answer": "The keyframes of a video"
  },
  {
    "q": "Macromedia Director follows which authoring metaphor?",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Hierarchical",
      "Slide show",
      "Card",
      "Cast/Score/Scripting"
    ],
    "answer": "Cast/Score/Scripting"
  },
  {
    "q": "Microsoft PowerPoint is an example of which metaphor?",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Slide show metaphor",
      "Cast/Score",
      "Frames",
      "Iconic flow control"
    ],
    "answer": "Slide show metaphor"
  },
  {
    "q": "In an HTML document, the HEAD contains:",
    "topic": "L37: Multimedia, Hypermedia and Authoring",
    "lecture": "L37",
    "options": [
      "Nothing",
      "Metadata about the document, while BODY has the content",
      "Only images",
      "The content, while BODY has metadata"
    ],
    "answer": "Metadata about the document, while BODY has the content"
  },
  {
    "q": "Sound is:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "A pressure wave and a continuous analog signal that needs air",
      "Digital by nature",
      "Possible in space",
      "An electromagnetic wave"
    ],
    "answer": "A pressure wave and a continuous analog signal that needs air"
  },
  {
    "q": "A transducer converts sound pressure into:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "Voltage",
      "Pixels",
      "Light",
      "Heat"
    ],
    "answer": "Voltage"
  },
  {
    "q": "Digitizing audio involves which two steps?",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "Shading and mapping",
      "Sampling and quantization",
      "Filtering and mixing",
      "Scanning and clipping"
    ],
    "answer": "Sampling and quantization"
  },
  {
    "q": "The human audible range is roughly:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "0 to 8 kHz",
      "1 Hz to 100 Hz",
      "20 Hz to 20 kHz",
      "100 kHz to 1 MHz"
    ],
    "answer": "20 Hz to 20 kHz"
  },
  {
    "q": "Nyquist rate says to reconstruct a signal we must sample at:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "Half the maximum frequency",
      "The same as the minimum frequency",
      "Twice the maximum frequency",
      "Any rate"
    ],
    "answer": "Twice the maximum frequency"
  },
  {
    "q": "A 16-bit sample can represent how many levels?",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "65,536",
      "256",
      "4096",
      "1,024"
    ],
    "answer": "65,536"
  },
  {
    "q": "Compared with FM synthesis, wave table synthesis gives:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "No sound",
      "More realistic sound but needs more storage",
      "Less storage",
      "Less realistic sound"
    ],
    "answer": "More realistic sound but needs more storage"
  },
  {
    "q": "Which video signal type uses three separate R, G, B signals and gives the best colour but needs more bandwidth?",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "Component video",
      "None",
      "S-video",
      "Composite video"
    ],
    "answer": "Component video"
  },
  {
    "q": "S-video uses:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "Three wires",
      "No wires",
      "Two wires: one for luminance and one for composite chrominance",
      "One wire"
    ],
    "answer": "Two wires: one for luminance and one for composite chrominance"
  },
  {
    "q": "In 4:2:2 chromatic subsampling of four pixels, the number of values transmitted is:",
    "topic": "L38: Digital Audio and Digital Video",
    "lecture": "L38",
    "options": [
      "6",
      "8 instead of 12",
      "12",
      "4"
    ],
    "answer": "8 instead of 12"
  },
  {
    "q": "An encoder converts data into compressed form and its outputs are called:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Texels",
      "Voxels",
      "Pixels",
      "Codes or codewords"
    ],
    "answer": "Codes or codewords"
  },
  {
    "q": "Lossless compression:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Loses information",
      "Allows exact recovery of the original, with usually a low compression ratio",
      "Cannot be decoded",
      "Is always lossy"
    ],
    "answer": "Allows exact recovery of the original, with usually a low compression ratio"
  },
  {
    "q": "Lossy compression gives a higher ratio but:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Some information is permanently lost",
      "Is slower always",
      "No data is lost",
      "Needs no quantization"
    ],
    "answer": "Some information is permanently lost"
  },
  {
    "q": "In vector quantization, a collection of code vectors is called:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "A scan",
      "A codebook",
      "A lattice",
      "A frame"
    ],
    "answer": "A codebook"
  },
  {
    "q": "Transform coding commonly uses which transform?",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Gouraud",
      "Painter",
      "Discrete Cosine Transform (DCT)",
      "Bresenham"
    ],
    "answer": "Discrete Cosine Transform (DCT)"
  },
  {
    "q": "JPEG stands for:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Joint Pixel Encoding Group",
      "Joint Print Exchange Group",
      "Java Photo Extension Group",
      "Joint Photographic Experts Group (standard since 1992)"
    ],
    "answer": "Joint Photographic Experts Group (standard since 1992)"
  },
  {
    "q": "JPEG works because pixel values change slowly across an image, known as:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Metamerism",
      "Temporal redundancy",
      "Aliasing",
      "Spatial redundancy"
    ],
    "answer": "Spatial redundancy"
  },
  {
    "q": "JPEG divides each image component into blocks of size:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "16 by 16",
      "8 by 8",
      "4 by 4",
      "2 by 2"
    ],
    "answer": "8 by 8"
  },
  {
    "q": "In JPEG, the lossy step is:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "Quantization (divide DCT coefficients by integers and round)",
      "Huffman coding",
      "Block splitting",
      "Zigzag scan"
    ],
    "answer": "Quantization (divide DCT coefficients by integers and round)"
  },
  {
    "q": "In JPEG, AC coefficients are coded by RLC and the DC coefficient by:",
    "topic": "L39: Data Compression and JPEG",
    "lecture": "L39",
    "options": [
      "DCT",
      "DPCM (differential pulse code modulation)",
      "Zigzag",
      "Gamma correction"
    ],
    "answer": "DPCM (differential pulse code modulation)"
  },
  {
    "q": "H.261, the earliest video compression standard, was developed by:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "ISO in 1998",
      "Google in 2010",
      "MPEG in 2003",
      "ITU-T in 1990"
    ],
    "answer": "ITU-T in 1990"
  },
  {
    "q": "Video compression mainly exploits:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "Colour redundancy only",
      "Temporal redundancy between consecutive frames",
      "Only spatial redundancy",
      "Audio redundancy"
    ],
    "answer": "Temporal redundancy between consecutive frames"
  },
  {
    "q": "In motion compensation each frame is divided into macroblocks of size N by N, where N is typically:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "2 or 4",
      "128",
      "32 or 64",
      "8 or 16"
    ],
    "answer": "8 or 16"
  },
  {
    "q": "A motion vector represents:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "The frame rate",
      "The displacement of a macroblock from the reference frame to the target frame",
      "The colour of a block",
      "The quantization step"
    ],
    "answer": "The displacement of a macroblock from the reference frame to the target frame"
  },
  {
    "q": "H.261 uses which kind of prediction?",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "Bidirectional prediction",
      "Backward prediction only",
      "No prediction",
      "Forward prediction only"
    ],
    "answer": "Forward prediction only"
  },
  {
    "q": "I-frames and P-frames differ because:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "I-frames use motion vectors, P-frames do not",
      "I-frames are coded independently like JPEG images, P-frames are predicted from a preceding I- or P-frame",
      "I-frames use backward prediction",
      "P-frames are independent images"
    ],
    "answer": "I-frames are coded independently like JPEG images, P-frames are predicted from a preceding I- or P-frame"
  },
  {
    "q": "An H.261 macroblock in an I-frame consists of:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "Two Cb and two Cr blocks only",
      "One 16x16 RGB block",
      "Four 8x8 Y blocks, one 8x8 Cb block and one 8x8 Cr block",
      "Six Y blocks"
    ],
    "answer": "Four 8x8 Y blocks, one 8x8 Cb block and one 8x8 Cr block"
  },
  {
    "q": "When the prediction error is too large in a P-frame, the encoder:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "Drops the frame",
      "Uses a B-frame",
      "Encodes the macroblock itself instead of the difference (non-motion-compensation macroblock)",
      "Increases the frame rate"
    ],
    "answer": "Encodes the macroblock itself instead of the difference (non-motion-compensation macroblock)"
  },
  {
    "q": "In H.261 quantization, a constant step_size is used for coefficients in a macroblock, and for non-DC coefficients step_size equals:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "256",
      "8",
      "2 x scale, where scale is an integer in [1, 31]",
      "1"
    ],
    "answer": "2 x scale, where scale is an integer in [1, 31]"
  },
  {
    "q": "The four layers of the H.261 bitstream are:",
    "topic": "L40: Video Compression and H.261",
    "lecture": "L40",
    "options": [
      "Frame, scan, segment and block",
      "Picture, GOB, macroblock and block",
      "Header, body, footer and tail",
      "Sequence, GOP, picture and slice"
    ],
    "answer": "Picture, GOB, macroblock and block"
  },
  {
    "q": "The MPEG-1 standard was first approved by ISO in:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "1991",
      "2018",
      "1988",
      "2003"
    ],
    "answer": "1991"
  },
  {
    "q": "MPEG-1 targets coded video and audio at up to about:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "15 kbits per second",
      "150 Mbits per second",
      "1 Gbit per second",
      "1.5 Mbits per second"
    ],
    "answer": "1.5 Mbits per second"
  },
  {
    "q": "Which part of MPEG-1 (ISO/IEC 11172) is the video compression standard itself?",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Part 1",
      "Part 3",
      "Part 2",
      "Part 5"
    ],
    "answer": "Part 2"
  },
  {
    "q": "B-frames in MPEG-1 support:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Only forward prediction",
      "No motion compensation",
      "Bidirectional motion compensation with up to two motion vectors per macroblock",
      "Only DC coding"
    ],
    "answer": "Bidirectional motion compensation with up to two motion vectors per macroblock"
  },
  {
    "q": "Backward prediction helps because a target macroblock may have no match in past frames due to:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Large screen",
      "Occlusions or unexpected motion",
      "Too many colours",
      "Low frame rate only"
    ],
    "answer": "Occlusions or unexpected motion"
  },
  {
    "q": "In MPEG parameters, M is the interval between a P-frame and its preceding I- or P-frame, and N is the interval between:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Two B-frames",
      "Two slices",
      "Two P-frames",
      "Two consecutive I-frames"
    ],
    "answer": "Two consecutive I-frames"
  },
  {
    "q": "For M = 3 and N = 9, the display pattern is:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "I P P P I P P P I ...",
      "I B P B P B P B P I",
      "I B B P B B P B B I ...",
      "I I I B B B P P P"
    ],
    "answer": "I B B P B B P B B I ..."
  },
  {
    "q": "Coding order differs from display order in MPEG because:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "B-frames need future reference frames, so buffering is required",
      "Audio is separate",
      "Frames are random",
      "P-frames are not coded"
    ],
    "answer": "B-frames need future reference frames, so buffering is required"
  },
  {
    "q": "Unlike H.261 which uses GOBs, MPEG-1 uses:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Fixed GOBs only",
      "Pixels",
      "Voxels",
      "Slices with a variable number of macroblocks"
    ],
    "answer": "Slices with a variable number of macroblocks"
  },
  {
    "q": "The six layers of the MPEG-1 bitstream from top to bottom are:",
    "topic": "L41: MPEG-1 Standard",
    "lecture": "L41",
    "options": [
      "Picture, GOB, macroblock, block, byte, bit",
      "Frame, scan, segment, slice, block, pixel",
      "Header, GOP, frame, scan, block, bit",
      "Sequence, GOP, picture, slice, macroblock, block"
    ],
    "answer": "Sequence, GOP, picture, slice, macroblock, block"
  },
  {
    "q": "Images account for roughly what share of the size of most web pages?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "20-25%",
      "5-10%",
      "60-65%",
      "95%"
    ],
    "answer": "60-65%"
  },
  {
    "q": "The gap that motivated WebP was that transparency required:",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "BMP only",
      "PNG, a fully lossless format with large files",
      "No format",
      "GIF only"
    ],
    "answer": "PNG, a fully lossless format with large files"
  },
  {
    "q": "Google reports WebP images are about how much smaller than PNG and JPEG at equivalent quality?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "90%",
      "0%",
      "30%",
      "5%"
    ],
    "answer": "30%"
  },
  {
    "q": "Lossy WebP is based on the key-frame encoding of which video codec?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "AV1",
      "MPEG-1",
      "VP8",
      "H.261"
    ],
    "answer": "VP8"
  },
  {
    "q": "Which are the four VP8 intra-prediction modes shared by all macroblock types?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "H_PRED, V_PRED, DC_PRED, TM_PRED",
      "L_PRED, R_PRED, U_PRED, D_PRED",
      "ADC, DCT, RLE, LZW",
      "MV_PRED, B_PRED, P_PRED, I_PRED"
    ],
    "answer": "H_PRED, V_PRED, DC_PRED, TM_PRED"
  },
  {
    "q": "VP8 adaptive block quantization allows a maximum of how many segments per image?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "1",
      "4",
      "256",
      "16"
    ],
    "answer": "4"
  },
  {
    "q": "Lossless WebP applies which kind of pipeline?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "No transforms",
      "Reversible transforms (spatial prediction, colour de-correlation, subtract green, colour indexing, packing) followed by LZ77-Huffman entropy coding",
      "A lossy pipeline with quantization set to zero",
      "JPEG DCT only"
    ],
    "answer": "Reversible transforms (spatial prediction, colour de-correlation, subtract green, colour indexing, packing) followed by LZ77-Huffman entropy coding"
  },
  {
    "q": "Colour indexing (palette) in lossless WebP is used if the number of unique ARGB values is:",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "Always",
      "More than 1 million",
      "Less than 256",
      "Exactly 1"
    ],
    "answer": "Less than 256"
  },
  {
    "q": "Lossy RGB with lossless alpha in WebP gives about what average size reduction compared with transparent PNG?",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "60-70%",
      "5%",
      "99%",
      "0%"
    ],
    "answer": "60-70%"
  },
  {
    "q": "AVIF differs from WebP in that AVIF:",
    "topic": "L42: Modern Image Compression (WebP and AVIF)",
    "lecture": "L42",
    "options": [
      "Uses AV1 in a HEIF container, supports HDR and 8/10/12-bit depth, and was developed by the Alliance for Open Media",
      "Has no alpha",
      "Is not royalty-free",
      "Uses VP8 and supports only 8-bit"
    ],
    "answer": "Uses AV1 in a HEIF container, supports HDR and 8/10/12-bit depth, and was developed by the Alliance for Open Media"
  },
  {
    "q": "H.26L, the predecessor of H.264, was launched in 1998 with the goal of:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "Making video lossless",
      "Doubling the coding efficiency of existing standards",
      "Replacing JPEG",
      "Creating audio codecs"
    ],
    "answer": "Doubling the coding efficiency of existing standards"
  },
  {
    "q": "H.264/AVC motion compensation supports block sizes:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "From 16x16 down to 4x4 (up to 16 motion vectors per macroblock)",
      "Only 64x64",
      "Only 16x16",
      "Only 8x8"
    ],
    "answer": "From 16x16 down to 4x4 (up to 16 motion vectors per macroblock)"
  },
  {
    "q": "H.264/AVC luma motion vectors have what accuracy?",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "Integer only",
      "1/16 sample",
      "Half-sample only",
      "Quarter-sample"
    ],
    "answer": "Quarter-sample"
  },
  {
    "q": "H.264/AVC replaced the 8x8 DCT with:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "A 4x4 integer transform",
      "A wavelet",
      "No transform",
      "A 16x16 DCT"
    ],
    "answer": "A 4x4 integer transform"
  },
  {
    "q": "CABAC in H.264/AVC is:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "A colour model",
      "A deblocking filter",
      "Context-adaptive binary arithmetic coding that reduces bit rate 5-15% over CAVLC",
      "A motion estimation method"
    ],
    "answer": "Context-adaptive binary arithmetic coding that reduces bit rate 5-15% over CAVLC"
  },
  {
    "q": "H.264/AVC separates video content from network delivery using VCL and NAL, and the Baseline profile has:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "Only I slices",
      "B slices and CABAC",
      "SP/SI pictures only",
      "I and P slices only and no CABAC"
    ],
    "answer": "I and P slices only and no CABAC"
  },
  {
    "q": "The Alliance for Open Media (AOM) was formed in 2015 to:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "Standardize JPEG",
      "Make a lossless audio codec",
      "Develop open, royalty-free multimedia technology",
      "Replace HTML"
    ],
    "answer": "Develop open, royalty-free multimedia technology"
  },
  {
    "q": "In AV1, the superblock size is:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "128x128 or 64x64 luma samples",
      "8x8 only",
      "Always 16x16",
      "4x4"
    ],
    "answer": "128x128 or 64x64 luma samples"
  },
  {
    "q": "AV1 extends motion accuracy to:",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "None",
      "1/2 pixel only",
      "Integer pixel only",
      "1/8 pixel with an affine motion model option"
    ],
    "answer": "1/8 pixel with an affine motion model option"
  },
  {
    "q": "AV1 applies which three in-loop filters?",
    "topic": "L43: Modern Video Compression (H.264/AVC and AV1)",
    "lecture": "L43",
    "options": [
      "DCT, DPCM and RLC",
      "Huffman, LZW and RLE",
      "Blur, sharpen and invert",
      "Deblocking, CDEF and loop restoration"
    ],
    "answer": "Deblocking, CDEF and loop restoration"
  },
  {
    "q": "Ray tracing is needed because the simple lighting model:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Makes simplistic assumptions, so a global illumination model is needed for realism",
      "Needs no light",
      "Cannot compute colour",
      "Is too accurate"
    ],
    "answer": "Makes simplistic assumptions, so a global illumination model is needed for realism"
  },
  {
    "q": "In ray tracing, rays are traced:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Only from the screen edges",
      "Randomly",
      "Backward from the viewer toward the light source",
      "Forward from every light source"
    ],
    "answer": "Backward from the viewer toward the light source"
  },
  {
    "q": "A pixel ray is generated:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "One per object",
      "One per pixel, passing through the pixel centre",
      "One per frame",
      "One per light"
    ],
    "answer": "One per pixel, passing through the pixel centre"
  },
  {
    "q": "For parallel projection, pixel rays are:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Parallel to each other, perpendicular to the view plane",
      "Converging at one point",
      "Random",
      "Curved"
    ],
    "answer": "Parallel to each other, perpendicular to the view plane"
  },
  {
    "q": "For perspective projection, pixel rays:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Are all parallel",
      "Do not exist",
      "Start at the light",
      "Start from the centre of projection and pass through different pixel centres"
    ],
    "answer": "Start from the centre of projection and pass through different pixel centres"
  },
  {
    "q": "The primary ray is the ray that:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Finds the closest (visible) surface for a pixel",
      "Is a shadow ray",
      "Goes to the light",
      "Misses everything"
    ],
    "answer": "Finds the closest (visible) surface for a pixel"
  },
  {
    "q": "At the hit point, secondary rays generated are:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "No rays",
      "Only pixel rays",
      "Reflected (specular) and transmitted (refracted) rays",
      "Only shadow rays"
    ],
    "answer": "Reflected (specular) and transmitted (refracted) rays"
  },
  {
    "q": "In the binary ray-tracing tree, the left edge represents reflection and the right edge represents:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Projection",
      "Clipping",
      "Shadow",
      "Refraction"
    ],
    "answer": "Refraction"
  },
  {
    "q": "The recursion in ray tracing stops if the ray hits no surface, hits a light source, or:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Gets coloured",
      "Reaches the maximum tree depth",
      "Reaches frame rate",
      "Touches the screen"
    ],
    "answer": "Reaches the maximum tree depth"
  },
  {
    "q": "Total intensity at a surface point is the sum of:",
    "topic": "L44: Ray Tracing Basics",
    "lecture": "L44",
    "options": [
      "Diffuse only",
      "Texture only",
      "Local, reflected and transmitted components (shadow rays are used for the local component)",
      "Ambient only"
    ],
    "answer": "Local, reflected and transmitted components (shadow rays are used for the local component)"
  },
  {
    "q": "A ray is represented as:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "A matrix",
      "A single vector",
      "An origin vector plus a direction vector, since it has a start point and a direction",
      "A plane"
    ],
    "answer": "An origin vector plus a direction vector, since it has a start point and a direction"
  },
  {
    "q": "The parametric form of a ray is:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "p = t",
      "p = s x d",
      "p = s . d",
      "p = s + t d (t >= 0, d unit direction)"
    ],
    "answer": "p = s + t d (t >= 0, d unit direction)"
  },
  {
    "q": "For parallel projection, the direction of every pixel ray is:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "The light direction",
      "The unit normal of the view plane",
      "Different for each pixel",
      "Zero"
    ],
    "answer": "The unit normal of the view plane"
  },
  {
    "q": "For perspective projection, the unit direction of a pixel ray is:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "(Px - Pr) divided by its magnitude, where Pr is the projection point and Px the pixel point",
      "Px only",
      "Pr only",
      "Random"
    ],
    "answer": "(Px - Pr) divided by its magnitude, where Pr is the projection point and Px the pixel point"
  },
  {
    "q": "Substituting the ray into the sphere equation gives:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "A linear equation",
      "A quadratic equation in t (with A = 1 as d is a unit vector)",
      "No equation",
      "A cubic equation"
    ],
    "answer": "A quadratic equation in t (with A = 1 as d is a unit vector)"
  },
  {
    "q": "If the discriminant of the ray-sphere quadratic is negative:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "The ray does not intersect the sphere",
      "There are two intersections",
      "The ray is tangent",
      "The ray is inside"
    ],
    "answer": "The ray does not intersect the sphere"
  },
  {
    "q": "If the discriminant is zero:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "There are two points",
      "The ray touches (is tangent to) the sphere at a single point",
      "The ray is parallel",
      "There is no intersection"
    ],
    "answer": "The ray touches (is tangent to) the sphere at a single point"
  },
  {
    "q": "If both t values are negative:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "Intersections lie behind the ray origin so there is no valid intersection",
      "The ray is inside",
      "The ray hits twice in front",
      "The ray is tangent"
    ],
    "answer": "Intersections lie behind the ray origin so there is no valid intersection"
  },
  {
    "q": "If the two t values differ in sign:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "The ray originates inside the sphere",
      "The ray misses",
      "The ray is tangent",
      "The sphere is empty"
    ],
    "answer": "The ray originates inside the sphere"
  },
  {
    "q": "If both t values are positive, we choose:",
    "topic": "L45: Ray-Surface Intersection",
    "lecture": "L45",
    "options": [
      "The smaller t (closest intersection, visible point)",
      "Neither",
      "The larger t",
      "The average"
    ],
    "answer": "The smaller t (closest intersection, visible point)"
  },
  {
    "q": "Intersection checks take about what share of ray-tracing render time?",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "95 percent",
      "5 percent",
      "1 percent",
      "50 percent"
    ],
    "answer": "95 percent"
  },
  {
    "q": "The two broad families to reduce intersection calculations are:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Texture and bump",
      "Bounding volume techniques and spatial subdivision methods",
      "Clipping and culling",
      "Shading and lighting"
    ],
    "answer": "Bounding volume techniques and spatial subdivision methods"
  },
  {
    "q": "With bounding volumes, if the ray misses the volume:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "The ray is reflected",
      "The image is blank",
      "All enclosed surfaces are skipped",
      "All surfaces are tested"
    ],
    "answer": "All enclosed surfaces are skipped"
  },
  {
    "q": "Hierarchical bounding volumes are:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Pixel grids",
      "Smaller volumes nested inside larger ones, tested top-down",
      "Random volumes",
      "One big volume only"
    ],
    "answer": "Smaller volumes nested inside larger ones, tested top-down"
  },
  {
    "q": "In uniform spatial subdivision each step divides a cell into:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Nine regions",
      "Two halves",
      "Four squares",
      "Eight equal octants"
    ],
    "answer": "Eight equal octants"
  },
  {
    "q": "Adaptive subdivision divides a cell:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Only if it contains surfaces",
      "Always",
      "Never",
      "Randomly"
    ],
    "answer": "Only if it contains surfaces"
  },
  {
    "q": "Supersampling anti-aliasing:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Uses one ray per pixel",
      "Removes all rays",
      "Uses only corner pixels",
      "Divides each pixel into subpixels, traces a ray per subpixel and averages the colours"
    ],
    "answer": "Divides each pixel into subpixels, traces a ray per subpixel and averages the colours"
  },
  {
    "q": "Adaptive sampling starts with how many rays per pixel?",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "One",
      "Sixteen",
      "Five (centre and four corners)",
      "Two"
    ],
    "answer": "Five (centre and four corners)"
  },
  {
    "q": "If the five ray colours are dissimilar in adaptive sampling, the pixel is:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "Divided into a 2 by 2 subpixel grid and the test is repeated",
      "Left as is",
      "Coloured black",
      "Discarded"
    ],
    "answer": "Divided into a 2 by 2 subpixel grid and the test is repeated"
  },
  {
    "q": "Adaptive sampling saves work because:",
    "topic": "L46: Ray Tracing Acceleration and Anti-aliasing",
    "lecture": "L46",
    "options": [
      "All pixels get 16 rays",
      "No rays are used",
      "Smooth regions stop early and detailed regions get more sampling",
      "It skips edges"
    ],
    "answer": "Smooth regions stop early and detailed regions get more sampling"
  },
  {
    "q": "Cartesian frames are characterised by:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Parallel axes",
      "Random axes",
      "Curved axes",
      "Mutually perpendicular (orthogonal) straight axes"
    ],
    "answer": "Mutually perpendicular (orthogonal) straight axes"
  },
  {
    "q": "In the inverted 2D frame:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "There is no origin",
      "The origin is lower-left",
      "X points down",
      "The origin is at the upper-left corner and positive Y points downward"
    ],
    "answer": "The origin is at the upper-left corner and positive Y points downward"
  },
  {
    "q": "Converting Y from the standard to the inverted frame, the X coordinate:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Is doubled",
      "Is zero",
      "Remains unchanged",
      "Is negated"
    ],
    "answer": "Remains unchanged"
  },
  {
    "q": "In a right-handed frame, curling the fingers from positive X to positive Y points the thumb along:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Positive X",
      "Positive Z",
      "Negative Y",
      "Negative Z"
    ],
    "answer": "Positive Z"
  },
  {
    "q": "In the left-handed frame used for screens:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Z is toward the viewer",
      "There is no Z",
      "Z is zero",
      "Positive Z is behind the screen, so larger Z is farther from the viewer"
    ],
    "answer": "Positive Z is behind the screen, so larger Z is farther from the viewer"
  },
  {
    "q": "A vector is defined by:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Position only",
      "Direction only",
      "Magnitude only",
      "Magnitude and direction"
    ],
    "answer": "Magnitude and direction"
  },
  {
    "q": "Direction cosines are:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Lengths of axes",
      "Cosines of the angles a vector makes with the X, Y and Z axes",
      "Dot products",
      "Sines of angles"
    ],
    "answer": "Cosines of the angles a vector makes with the X, Y and Z axes"
  },
  {
    "q": "A unit vector along V is obtained by:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Multiplying by the magnitude",
      "Squaring",
      "Dividing each component by the magnitude of V",
      "Adding 1"
    ],
    "answer": "Dividing each component by the magnitude of V"
  },
  {
    "q": "The dot product of two vectors:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Is a scalar, is zero for perpendicular vectors and is commutative",
      "Is not commutative",
      "Is always one",
      "Is a vector"
    ],
    "answer": "Is a scalar, is zero for perpendicular vectors and is commutative"
  },
  {
    "q": "The cross product of two vectors:",
    "topic": "L47: Coordinate Frames and Vectors (Appendix A)",
    "lecture": "L47",
    "options": [
      "Is parallel to both",
      "Is a vector perpendicular to both, is not commutative, and is zero for parallel vectors",
      "Is a scalar",
      "Is commutative"
    ],
    "answer": "Is a vector perpendicular to both, is not commutative, and is zero for parallel vectors"
  },
  {
    "q": "An r by c matrix has:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "r rows and c columns",
      "r elements",
      "c rows and r columns",
      "c elements"
    ],
    "answer": "r rows and c columns"
  },
  {
    "q": "Two matrices can be added only if they:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "Have no zeros",
      "Are square",
      "Have the same shape (same rows and columns)",
      "Are identity"
    ],
    "answer": "Have the same shape (same rows and columns)"
  },
  {
    "q": "The product AB of an m by n matrix A and p by q matrix B exists if and only if:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "m = p",
      "n = q",
      "n = p, giving an m by q result",
      "m = q"
    ],
    "answer": "n = p, giving an m by q result"
  },
  {
    "q": "Matrix multiplication is:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "Only for scalars",
      "Not commutative, but distributive over addition",
      "Not distributive",
      "Commutative"
    ],
    "answer": "Not commutative, but distributive over addition"
  },
  {
    "q": "The transpose of a product (M1 M2) equals:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "M1 times M2",
      "M2 transpose times M1 transpose",
      "Zero",
      "M1 transpose times M2 transpose"
    ],
    "answer": "M2 transpose times M1 transpose"
  },
  {
    "q": "Applying transformation A, then B, then C is equivalent to the matrix product:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "A . B . C",
      "C . B . A",
      "A + B + C",
      "B . A . C"
    ],
    "answer": "C . B . A"
  },
  {
    "q": "The determinant is defined only for:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "Square matrices (second order: m11 m22 - m12 m21)",
      "Identity only",
      "Any matrix",
      "Vectors only"
    ],
    "answer": "Square matrices (second order: m11 m22 - m12 m21)"
  },
  {
    "q": "The inverse of a matrix exists only if:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "Its determinant is zero",
      "It is a row vector",
      "It is square and its determinant is non-zero (non-singular)",
      "It has zeros"
    ],
    "answer": "It is square and its determinant is non-zero (non-singular)"
  },
  {
    "q": "The identity matrix has:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "1s on the diagonal and 0s elsewhere, and M M^-1 = I",
      "All ones",
      "Random values",
      "0s on the diagonal"
    ],
    "answer": "1s on the diagonal and 0s elsewhere, and M M^-1 = I"
  },
  {
    "q": "In the example, M + 2M equals:",
    "topic": "L48: Matrices and Matrix Operations (Appendix A)",
    "lecture": "L48",
    "options": [
      "3M (scalar multiplication and addition are element-wise)",
      "2M",
      "M squared",
      "0"
    ],
    "answer": "3M (scalar multiplication and addition are element-wise)"
  },
  {
    "q": "The slope of the line through (x1, y1) and (x2, y2) is:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "(y2 - y1) / (x2 - x1), undefined for vertical lines",
      "x1 + y1",
      "0 always",
      "(x2 - x1) / (y2 - y1)"
    ],
    "answer": "(y2 - y1) / (x2 - x1), undefined for vertical lines"
  },
  {
    "q": "For P(2, 3) and Q(4, 5), the line in slope-intercept form is:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "y = 3x",
      "y = x + 1",
      "y = x - 1",
      "y = 2x"
    ],
    "answer": "y = x + 1"
  },
  {
    "q": "In the slope-intercept form y = mx + c, c is:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "The intercept on the Y-axis",
      "The slope",
      "Zero",
      "The X-intercept"
    ],
    "answer": "The intercept on the Y-axis"
  },
  {
    "q": "Two lines y = m1 x + c1 and y = m2 x + c2 intersect at x equal to:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "(c2 - c1) / (m1 - m2), defined only when m1 is not equal to m2",
      "0",
      "c1 + c2",
      "(m1 - m2) / (c2 - c1)"
    ],
    "answer": "(c2 - c1) / (m1 - m2), defined only when m1 is not equal to m2"
  },
  {
    "q": "Parallel lines:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "Are perpendicular",
      "Have opposite slopes",
      "Always intersect",
      "Have equal slopes and never intersect"
    ],
    "answer": "Have equal slopes and never intersect"
  },
  {
    "q": "A vertical line has the equation x = b, and its intersection with y = mx + c is:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "(0, c)",
      "(b, mb + c)",
      "(b, b)",
      "(mb + c, b)"
    ],
    "answer": "(b, mb + c)"
  },
  {
    "q": "A horizontal line y = b meets y = mx + c at:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "(0, b)",
      "((b - c) / m, b)",
      "(b, 0)",
      "(b, (b - c) / m)"
    ],
    "answer": "((b - c) / m, b)"
  },
  {
    "q": "In the plane equation Ax + By + Cz + D = 0, the normal vector is:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "(A, B, C)",
      "(0, 0, D)",
      "(D, A, B)",
      "(x, y, z)"
    ],
    "answer": "(A, B, C)"
  },
  {
    "q": "A plane through three non-collinear points a, b, c has its normal found by:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "The dot product of a and b",
      "The cross product of (b - a) and (c - a)",
      "Adding the points",
      "Dividing the points"
    ],
    "answer": "The cross product of (b - a) and (c - a)"
  },
  {
    "q": "For a(1,1,1), b(3,4,5), c(7,7,7), the normal vector and plane equation are:",
    "topic": "L49: Lines and Planes (Appendix A)",
    "lecture": "L49",
    "options": [
      "n = (1, 1, 1) and x + y + z = 0",
      "n = (-6, 12, -6) and -x + 2y - z = 0",
      "n = (6, 12, 6) and x + 2y + z = 0",
      "n = (0, 0, 0)"
    ],
    "answer": "n = (-6, 12, -6) and -x + 2y - z = 0"
  }
].map(q => ({
  ...q,
  options: [...q.options].sort(() => Math.random() - 0.5)
}));

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let markedForReview = Array(questions.length).fill(false);
let timeLeft = 180 * 60; // 180 minutes (3 hours)
let submitted = false;
let started = false;
let paused = false;
let timerInterval = null;

const questionNumber = document.getElementById("question-number");
const questionTopic = document.getElementById("question-topic");
const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const timer = document.getElementById("timer");
const palette = document.getElementById("question-palette");
const lectureSelect = document.getElementById("lecture-select");

const totalQuestionsEl = document.getElementById("total-questions");
if (totalQuestionsEl) totalQuestionsEl.textContent = questions.length;
const totalMinutesEl = document.getElementById("total-minutes");
if (totalMinutesEl) totalMinutesEl.textContent = Math.round(timeLeft / 60);

// Populate lecture select dropdown
if (lectureSelect) {
  const lectureMap = new Map();
  questions.forEach((q, idx) => {
    const key = q.lecture || (q.topic ? q.topic.split(":")[0].trim() : "");
    if (key && !lectureMap.has(key)) {
      lectureMap.set(key, { index: idx, title: q.topic || key });
    }
  });

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Jump to Lecture...";
  lectureSelect.appendChild(defaultOpt);

  lectureMap.forEach((info, lec) => {
    const opt = document.createElement("option");
    opt.value = info.index;
    opt.textContent = info.title;
    lectureSelect.appendChild(opt);
  });

  lectureSelect.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      currentQuestion = parseInt(e.target.value, 10);
      renderQuestion();
      e.target.value = "";
    }
  });
}

function renderQuestion() {
  const question = questions[currentQuestion];

  questionNumber.textContent = `Question ${currentQuestion + 1}`;
  if (questionTopic) {
    questionTopic.textContent = question.topic || "";
    questionTopic.title = question.topic || "";
  }
  questionCount.textContent = `${currentQuestion + 1} of ${questions.length}`;
  questionText.textContent = question.q;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.style.color = "";

  question.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;
    radio.checked = userAnswers[currentQuestion] === option;
    radio.disabled = submitted;

    const text = document.createElement("span");
    text.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    label.append(radio, text);

    if (submitted) {
      if (option === question.answer) label.classList.add("correct");
      if (userAnswers[currentQuestion] === option && option !== question.answer) {
        label.classList.add("wrong");
      }
    }

    radio.addEventListener("change", () => {
      if (submitted) return;
      userAnswers[currentQuestion] = option;
      feedback.textContent = "";
      feedback.style.color = "";
      renderQuestion();
    });

    optionsContainer.appendChild(label);
  });

  if (submitted) {
    feedback.textContent = `Correct answer: ${question.answer}`;
    feedback.style.color = "#1e40af";
  }

  document.getElementById("previous-btn").disabled = currentQuestion === 0;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent = "Next";
  nextBtn.disabled = currentQuestion === questions.length - 1;
  const reviewBtn = document.getElementById("review-btn");
  reviewBtn.textContent =
    markedForReview[currentQuestion] ? "Remove Review Mark" : "Mark for Review";
  reviewBtn.disabled = submitted;

  renderPalette();
}

function renderPalette() {
  palette.innerHTML = "";

  questions.forEach((q, index) => {
    const button = document.createElement("button");
    button.className = "palette-btn";
    button.textContent = index + 1;

    if (index === currentQuestion) button.classList.add("current");
    
    if (submitted) {
      if (userAnswers[index] === q.answer) {
        button.classList.add("correct");
      } else if (userAnswers[index] !== null) {
        button.classList.add("wrong");
      }
    } else {
      if (userAnswers[index] !== null) button.classList.add("answered");
      if (markedForReview[index]) button.classList.add("reviewed");
    }

    button.disabled = false;
    button.addEventListener("click", () => {
      currentQuestion = index;
      renderQuestion();
    });

    palette.appendChild(button);
  });

  // Ensure current question button is visible in scrollable palette
  const activeBtn = palette.children[currentQuestion];
  if (activeBtn) {
    activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

document.getElementById("previous-btn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
});

document.getElementById("review-btn").addEventListener("click", () => {
  markedForReview[currentQuestion] = !markedForReview[currentQuestion];
  renderQuestion();
});

function submitTest(autoSubmit = false) {
  if (submitted) return;

  if (!autoSubmit && !confirm("Are you sure you want to submit the test?")) {
    return;
  }

  submitted = true;
  clearInterval(timerInterval);
  document.getElementById("stop-btn").hidden = true;

  const score = questions.reduce((total, question, index) => {
    return total + (userAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  renderQuestion();

  questionText.textContent = autoSubmit
    ? "Time is up! Your test has been submitted."
    : "Test submitted successfully!";

  feedback.textContent =
    `Your score: ${score} / ${questions.length} | ` +
    `Correct: ${score} | Incorrect: ${userAnswers.filter((answer, i) => answer !== null && answer !== questions[i].answer).length} | ` +
    `Unanswered: ${userAnswers.filter(answer => answer === null).length}`;

  feedback.style.color = "#1e40af";
  document.getElementById("submit-btn").disabled = true;
  document.getElementById("review-btn").disabled = true;
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  if (hours > 0) {
    timer.textContent =
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  } else {
    timer.textContent =
      `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
}

function tick() {
  timeLeft--;
  updateTimerDisplay();

  if (timeLeft <= 0) {
    timer.textContent = "00:00";
    submitTest(true);
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (submitted || paused) return;
    tick();
  }, 1000);
}

function stopTest() {
  if (submitted) return;

  paused = !paused;
  const stopBtn = document.getElementById("stop-btn");

  if (paused) {
    clearInterval(timerInterval);
    stopBtn.textContent = "Resume";
  } else {
    startTimer();
    stopBtn.textContent = "Stop";
  }
}

function beginTest() {
  if (started) return;

  started = true;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("stop-btn").hidden = false;
  updateTimerDisplay();
  startTimer();
}

document.getElementById("start-btn").addEventListener("click", beginTest);
document.getElementById("stop-btn").addEventListener("click", stopTest);
document.getElementById("submit-btn").addEventListener("click", () => submitTest());

// Show the first question behind the start screen, but keep the timer idle
// until the user presses Start.
renderQuestion();
