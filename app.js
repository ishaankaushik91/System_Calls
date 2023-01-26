import { execFile } from "child_process";

async function CommandLine()
{
    try {
        
        await BashCompiler('touch', ['1.txt']);

    } catch (error) {
        console.log(error);
    }
}
CommandLine();

function BashCompiler(cmd, args) {
    
    return new Promise((resolve, reject) => {
        let output = {};
        const child = execFile(cmd, args, (err, stdout, stderr) => {
            if (stdout) {
                output.stdout = stdout;
            }
            if (err) {
                if (stderr) {
                    output.stderr = stderr;
                    return;
                }
                output.err = err;
            }
        });
        child.on("close", () => {
            resolve(output);
        });
    })
}