import AnimatedFlame from "@/assets/assets/animated-flame-01.gif";
import BorderSeparator from "@/assets/assets/borderseparator.gif";
import PixelNeon from "@/assets/assets/pixel-neon.gif";
import PixelNightBanner from "@/assets/assets/pixel-night-banner.gif";
import VaporwaveAesthetic from "@/assets/assets/vaporwave-aesthetic.gif";

const Index = () => {
  return (
    <div className="font-sans p-5 max-w-6xl mx-auto">
      <div className="">
              {/* Separator */}
      <img src={BorderSeparator} className="w-full" alt="separator" />

      {/* Title Section */}
      <div className="text-center my-5">
        <h2 className="flex items-center justify-center gap-2.5">
          <img src={AnimatedFlame} className="w-[14px]" alt="flame" />
          Full-Stack Developer • Frontend-Enthusiast
          <img src={AnimatedFlame} className="w-[14px]" alt="flame" />
          </h2>
          {/* Wakatime Badge */}
      <div className="text-center mb-5">
        <img
          src="https://wakatime.com/badge/user/018c974d-1366-4d7f-9b95-0e80821d2165.svg"
          alt="wakatime"
          className="inline-block"
        />
      </div>
      </div>

      <img src={BorderSeparator} className="w-full" alt="separator" />

</div>


      {/* Banner */}
      <div className="mb-5">
        <img src={PixelNightBanner} alt="Banner" className="w-full block" />
      </div>


      {/* About Me Section */}
      <div className="relative my-10 p-5 ">
        <img
          src={VaporwaveAesthetic}
          alt="pixel city image"
          className="h-1/1 absolute right-0 top-0"
        />

   <div className="max-w-[70%]">
  <h3>👨‍💻 About Me</h3>
  <ul className="list-disc list-outside ml-5 leading-[1.6] space-y-1">
    <li>I'm <strong>Jade Ivan (Bansimplified)</strong> — an IT (Programming) student from the Philippines.</li>
    <li>Actively enhancing my software engineering foundation across <strong>frontend, backend, and full-stack workflows</strong>.</li>
    <li>Passionate about building scalable web systems, UI engineering, and modern development tooling.</li>
    <li><strong>Decade Goal:</strong> Become a full-fledged Software Engineer.</li>
    <li><strong>Interests include:</strong>Coffee, learning new frameworks, and creative coding.</li>
    <li><strong>Hobbies: </strong>Reading manga/manhwa, drawing, and exploring digital storytelling.</li>
  </ul>

  <p className="mt-5">
    <strong>📄 Resume:</strong>{' '}
    <a href="./src/components/Pages/About/Bringcolajadeivan,V.pdf" className="text-[#FE428E] no-underline">
      Download Resume
    </a>
  </p>
</div>
      </div>

      {/* Education and Connection Section */}
      <div className="text-center my-10">
        <img src={BorderSeparator} className="w-full" alt="separator" />
        <h2 className="my-5">
          <strong>📚 Education and Connection</strong>
          <img src={AnimatedFlame} className="w-4 mx-2.5 inline" alt="flame" />
          <img src={AnimatedFlame} className="w-4 mx-2.5 inline" alt="flame" />
        </h2>

        <div className="flex justify-center flex-wrap gap-2.5 my-5">
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=naviedaj567@gmail.com&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="gmail logo" />
          </a>
          <a href="https://www.facebook.com/his.bannie" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Facebook&logo=facebook&label=&color=1877F2&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="facebook logo" />
          </a>
          <a href="https://www.linkedin.com/in/jade-ivan-bringcola-bb9466272/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="linkedin logo" />
          </a>
          <a href="https://www.instagram.com/his.bannie/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=his.bannie&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="instagram logo" />
          </a>
          <a href="https://www.youtube.com/@KnownAsBanBan" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="youtube logo" />
          </a>
          <a href="https://twitter.com/JBringcola" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/static/v1?message=Twitter&logo=twitter&label=&color=1DA1F2&logoColor=white&labelColor=&style=for-the-badge" height="35" alt="twitter logo" />
          </a>
        </div>
      </div>

      {/* Pixel Image */}
      <div className="text-center my-5">
        <img src={PixelNeon} alt="pixel guy using computer" className="w-full" />
      </div>

      {/* Technologies and Skills Section */}
      <div className="my-10">
        <div className="text-center">
          <img src={BorderSeparator} className="w-full" alt="separator" />
          <h2 className="my-5">
            <strong>⚙️ Technologies and Skills</strong>
          </h2>
          <img src={BorderSeparator} className="w-full" alt="separator" />
        </div>

        <div className="my-5">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className="p-[10px] font-bold">Frontend</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vite,tailwind,bootstrap,jquery&theme=dark" alt="frontend icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Backend & Tools</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=php,mysql,laravel,postgres,supabase&theme=dark" alt="backend icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Dev Tools & Others</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=git,github,docker,vscode,npm,ai&theme=dark" alt="dev tools icons" />
                </td>
              </tr>
              <tr>
                <td className="p-[10px] font-bold">Operating Systems</td>
                <td className="p-[10px]">
                  <img src="https://skillicons.dev/icons?i=windows,debian,linux,mint,ubuntu&theme=dark" alt="os icons" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <img src={BorderSeparator} className="w-full" alt="separator" />

      {/* Github Stats Section */}
      <div className="my-10">
        <div className="text-center">
          <h2>🏆 My Github Stats</h2>
          <img src={BorderSeparator} className="w-full" alt="separator" />
        </div>

        <div className="flex gap-[1%] my-5">
          <a href="https://github.com/BanSimplified567">
            <img
              src="https://github-readme-stats.vercel.app/api?username=BanSimplified567&show_icons=true&count_private=true&theme=radical"
              alt="GitHub stats"
              className=" w-100%  h-100% md:h-auto"
            />
          </a>
          <a href="https://wakatime.com/@BanBan" target="_blank" rel="noopener noreferrer">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=BanSimplified567&custom_title=BanSimplified567's%20GitHub%20Activity%20Graph&bg_color=141321&color=A9FEF7&line=626069&point=F8D847&area_color=FE428E&title_color=FE428E&area=true"
              alt="Github Activity Graph"
              className="w-[49.5%]"
            />
          </a>
        </div>

        <div className="mt-5">
          <a href="https://wakatime.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://wakatime.com/share/@BanBan/382532ff-5057-45a2-b975-14ab938e7e7c.png"
              alt="wakatime stats"
              className="w-full"
            />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-10">
        <div className="text-center">
          <img src={BorderSeparator} className="w-full" alt="separator" />
          <h2 className="my-5 flex items-center justify-center gap-4">
            <img src={AnimatedFlame} className="w-4" alt="flame" />
            👨‍💻 Projects
            <img src={AnimatedFlame} className="w-4" alt="flame" />
          </h2>
        </div>

        <div className="flex justify-center">
          <a href="https://github.com/BanSimplified567/bansimplified-boilerplete-using-react">
            <img
              src="https://github-readme-stats.vercel.app/api/pin/?username=BanSimplified567&repo=bansimplified-boilerplete-using-react"
              alt="bansimplified-boilerplete-using-react"
              className="w-full"
            />
          </a>
        </div>
      </div>

      <img src={BorderSeparator} className="w-full" alt="separator" />
    </div>
  );
};

export default Index;
