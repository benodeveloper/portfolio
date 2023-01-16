export class TerminalEmulator {
	public screen: HTMLDivElement;
	public field: any;
	public fieldwrap: any;

    constructor (screen: HTMLDivElement) {
        this.screen = screen;
        this.createInput()
    }

    createInput() {
        let inputField: HTMLDivElement = document.createElement('div');
        let inputWrap: HTMLDivElement = document.createElement('div');

        inputField.className = 'terminal_emulator__field';
        inputField.innerHTML = '';
        inputWrap.appendChild(inputField);
        this.screen.appendChild(inputWrap);

        this.field = inputField;
        this.fieldwrap = inputWrap;
    }


    enterInput(input: String) {
        return new Promise((resolve: Function, reject) => {
            var randomSpeed = (max: number, min: number ) => {
                return Math.random() * (max - min) + min;
            }

            var speed = randomSpeed(70, 90);
            var i = 0;
            var str = '';
            var type = () => {

                str = str + input[i];
                this.field.innerHTML = str.replace(/ /g, '&nbsp;');
                i++;

                setTimeout(() => {
                    if (i < input.length) {
                        if (i % 5 === 0) speed = randomSpeed(80, 120);
                        type();
                    } else {
                        console.log('tick');
                        setTimeout(() => {
                            console.log('tock');
                            resolve();
                        }, 400);

                    }
                }, speed);


            };


            type();

        });
    }

    enterCommand() {
        return new Promise((resolve: Function, reject) => {
            var resp = document.createElement('div');
            resp.className = 'terminal_emulator__command';
            resp.innerHTML = this.field.innerHTML;
            this.screen.insertBefore(resp, this.fieldwrap);

            this.field.innerHTML = '';
            resolve();
        })
    }

    enterResponse(response: string) {

        return new Promise((resolve: Function, reject) => {
            var resp = document.createElement('div');
            resp.className = 'terminal_emulator__response';
            resp.innerHTML = response;
            this.screen.insertBefore(resp, this.fieldwrap);

            resolve();
        })


    }

    wait(time: number, busy: boolean) {
        busy = (busy === undefined) ? true : busy;
        return new Promise((resolve:Function, reject) => {
            if (busy) {
                this.field.classList.add('waiting');
            } else {
                this.field.classList.remove('waiting');
            }
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    reset() {
        return new Promise((resolve:Function, reject) => {
            this.field.classList.remove('waiting');
            resolve();
        });
    }

    run() {
        this.wait(1000, false)
                .then(this.enterInput.bind(this, 'mvn spring-boot:run'))
                .then(this.enterCommand.bind(this))
                .then(this.enterResponse.bind(this, '[INFO] Scanning for projects...'))
                .then(this.wait.bind(this, 600))
                .then(this.enterResponse.bind(this, '[INFO]'))
                .then(this.wait.bind(this, 700))
                .then(this.enterResponse.bind(this, '[INFO] ------------------< ma.doctori:configuration-service >------------------'))
                .then(this.wait.bind(this, 2000))
                .then(this.enterResponse.bind(this, '[INFO] Building configuration-service 1.0-SNAPSHOT'))
                .then(this.wait.bind(this, 600))
                .then(this.enterResponse.bind(this, '[INFO] --------------------------------[ jar ]---------------------------------'))
                .then(this.wait.bind(this, 600))
                .then(this.enterResponse.bind(this, '[INFO] Attaching agents: []'))
                .then(this.wait.bind(this, 300))
                .then(this.enterResponse.bind(this, "    "))
                .then(this.enterResponse.bind(this, "  .    ____          _            __ _ _    "))
                .then(this.enterResponse.bind(this, " /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \    "))
                .then(this.enterResponse.bind(this, "( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \    "))
                .then(this.enterResponse.bind(this, " \\/  ___)| |_)| | | | | || (_| |  ) ) ) )    "))
                .then(this.enterResponse.bind(this, "  '  |____| .__|_| |_|_| |_\__, | / / / /    "))
                .then(this.enterResponse.bind(this, " =========|_|==============|___/=/_/_/_/    "))
                .then(this.enterResponse.bind(this, " :: Spring Boot ::                (v3.0.1)    "))
                .then(this.wait.bind(this, 700))
                .then(this.enterResponse.bind(this, 'Make website responsive? (y/y)'))
                .then(this.wait.bind(this, 2000, false))
                .then(this.enterInput.bind(this, 'y'))
                .then(this.enterCommand.bind(this))
                .then(this.wait.bind(this, 400))
                .then(this.enterResponse.bind(this, 'finalizing...'))
                .then(this.wait.bind(this, 2000))
                .then(this.enterResponse.bind(this, 'Website complete! Wasn\'t that easy?'))
                .then(this.reset.bind(this));
    }
}
