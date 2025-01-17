
export const SocialFollow = () => {
    return <ul className="mt-5 flex justify-center gap-7">
        <li>
            <a href="https://twitter.com/benodeveloper" title="twitter" rel="noreferrer noopener nofollow" target="_blank" className="flex text-neutral-500 dark:text-neutral-400 hover:text-[#2165f4] fill-neutral-500 hover:fill-[#2165f4]">
                <svg width={18} height={19} className="mr-2" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M16.15 3.738c.011.164.011.328.011.492C16.161 9.234 12.45 15 5.665 15c-2.09 0-4.032-.621-5.665-1.7.297.036.582.048.89.048a7.27 7.27 0 0 0 4.58-1.618c-1.621-.035-2.98-1.125-3.448-2.625.228.036.456.059.696.059.332 0 .663-.047.971-.129C2 8.684.731 7.16.731 5.32v-.047a3.644 3.644 0 0 0 1.667.48A3.81 3.81 0 0 1 .754 2.603c0-.704.182-1.348.502-1.91 1.816 2.296 4.546 3.796 7.607 3.96a4.38 4.38 0 0 1-.091-.867C8.772 1.7 10.416 0 12.46 0c1.062 0 2.021.457 2.695 1.195a7.153 7.153 0 0 0 2.341-.914 3.759 3.759 0 0 1-1.621 2.086A7.248 7.248 0 0 0 18 1.781a8.048 8.048 0 0 1-1.85 1.957Z" />
                </svg> Twitter
            </a>
        </li>
        <li>
            <a href="https://github.com/benodeveloper" title="github" rel="noreferrer noopener nofollow" target="_blank" className="flex text-neutral-500 dark:text-neutral-400 hover:text-[#2165f4] fill-neutral-500 hover:fill-[#2165f4]">
                <svg width={18} height={19} className="mr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.02 14.132c0 .072-.083.13-.188.13-.12.011-.203-.047-.203-.13 0-.073.083-.131.188-.131.11-.011.204.047.204.13Zm-1.128-.164c-.025.073.047.156.156.178.094.036.203 0 .225-.073.022-.072-.047-.156-.156-.188-.094-.026-.2.01-.225.083Zm1.604-.062c-.105.026-.178.095-.167.178.01.073.105.12.214.095.105-.026.178-.095.167-.167-.01-.07-.109-.116-.214-.106ZM8.884 0C3.85 0 0 3.821 0 8.855c0 4.024 2.533 7.468 6.151 8.68.465.084.628-.203.628-.439 0-.225-.01-1.466-.01-2.228 0 0-2.541.544-3.075-1.081 0 0-.413-1.056-1.009-1.329 0 0-.83-.57.059-.558 0 0 .903.072 1.4.936.795 1.4 2.127.998 2.646.758.083-.58.32-.983.58-1.223-2.028-.225-4.075-.519-4.075-4.01 0-.998.276-1.499.857-2.137-.095-.236-.403-1.209.094-2.464.758-.236 2.504.98 2.504.98a8.526 8.526 0 0 1 2.279-.309c.773 0 1.553.105 2.28.309 0 0 1.745-1.22 2.503-.98.497 1.259.189 2.228.095 2.464.58.642.936 1.143.936 2.137 0 3.502-2.138 3.782-4.166 4.01.334.287.617.831.617 1.684 0 1.223-.011 2.736-.011 3.034 0 .236.167.523.628.44C15.54 16.322 18 12.878 18 8.854 18 3.82 13.917 0 8.884 0ZM3.527 12.517c-.047.036-.036.12.026.188.058.058.141.084.189.037.047-.037.036-.12-.026-.19-.058-.057-.141-.083-.189-.035Zm-.392-.294c-.025.047.011.105.084.141.058.036.13.025.156-.025.025-.048-.01-.106-.083-.142-.073-.022-.131-.01-.157.026Zm1.176 1.291c-.058.048-.036.157.047.226.084.083.19.094.236.036.048-.047.026-.156-.047-.225-.08-.084-.189-.095-.236-.037Zm-.413-.533c-.058.036-.058.13 0 .214.058.084.156.12.203.084.058-.047.058-.142 0-.225-.051-.084-.145-.12-.203-.073Z" />
                </svg> Github
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/benodeveloper" title="linkedin" rel="noreferrer noopener nofollow" target="_blank" className="flex text-neutral-500 dark:text-neutral-400 hover:text-[#2165f4] fill-neutral-500 hover:fill-[#2165f4]">
                <svg width={18} height={19} className="mr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.03 18H.296V5.982H4.03V18ZM2.16 4.343C.968 4.343 0 3.355 0 2.16a2.161 2.161 0 0 1 4.322 0c0 1.194-.968 2.182-2.16 2.182ZM17.996 18h-3.724v-5.85c0-1.395-.028-3.183-1.94-3.183-1.94 0-2.238 1.515-2.238 3.082V18H6.367V5.983h3.579v1.64h.052c.498-.945 1.715-1.941 3.53-1.941C17.307 5.68 18 8.168 18 11.398V18h-.004Z" />
                </svg> LinkedIn
            </a>
        </li>
        {/* <li>
            <a href="mailto:listoun.developer@gmail.com" title="email" rel="noreferrer noopener nofollow" target="_blank" className="flex text-neutral-500 dark:text-neutral-400 hover:text-[#2165f4] fill-neutral-500 hover:fill-[#2165f4]">
                <svg width={18} className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z" />
                </svg> Email
            </a>
        </li> */}
    </ul>
}