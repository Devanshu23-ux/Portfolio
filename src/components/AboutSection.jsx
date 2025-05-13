import { Briefcase, Code, User, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm deeply fascinated by the intersection of design and development, and I'm always eager to learn new tools and frameworks that help me build better and faster. Whether it's creating a sleek landing page or a complex web application, I focus on writing efficient, maintainable code and delivering seamless user experiences.
            </p>

            <p className="text-muted-foreground">
              When I'm not coding, you'll probably find me exploring UI/UX trends, contributing to side projects, or diving into tech communities for inspiration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Devanshu_Joshi_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Download CV
                <Download size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building complete web applications with MERN stack and modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and intuitive user interfaces with HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing robust server-side applications with Node.js, Express, and databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
