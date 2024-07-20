import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="jsx-39930203 heading__wrapper">
        <div className="jsx-39930203 heading">
          <span className="jsx-1545067541 avatar heading__user-avatar">
            <Image
              width={98.4}
              height={98.4}
              alt="Your Avatar"
              src="/assets/avatar.png"
              draggable="false"
              className="jsx-1545067541 avatar-img"
            />
          </span>
          <div className="jsx-39930203 heading__name">
            <div className="jsx-39930203 heading__title">
              <h2 className="jsx-1181318970 headding__user-name">
                Ofek Ashery
              </h2>
              <span className="jsx-2983294219 headding__user-role">Admin</span>
              <div className="jsx-39930203 heading__actions">
                <button
                  type="button"
                  href="/projects"
                  className="jsx-2132866752 btn "
                >
                  <div className="text">Create Project</div>
                </button>
              </div>
            </div>
            <div className="jsx-39930203 heading__integration">
              <p className="jsx-2596564080 heading__integration-title">
                Git Integrations
              </p>
              <a
                href="https://github.com/ofekashery"
                target="_blank"
                rel="noopener"
                className="jsx-3929194897 link  "
              >
                <div className="jsx-39930203 heading__integration-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-label="Github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="jsx-39930203">ofekashery</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
