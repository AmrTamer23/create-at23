import inquirer from "inquirer";
import { $ } from "bun";

async function main() {
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Select the template type:",
      choices: ["static", "e-commerce"],
    },
  ]);

  if (template === "e-commerce") {
    console.log("⌛ Coming soon...");
    return;
  }

  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the name of your project:",
    },
  ]);

  console.log(`Cloning static template for project "${projectName}"...`);
  await cloneStaticTemplate(projectName);
}

async function cloneStaticTemplate(projectName: string) {
  const url = "https://github.com/AmrTamer23/at23-static-web.git";
  await $`git clone ${url} ${projectName}`;
  console.log(`🥳 Project "${projectName}" has been created!`);
  console.log(
    `To get started, navigate to the project directory and run "bun i" then "bun dev".`
  );
  console.log(
    `Take a look at the README.md file for more information on how to use this template. 
      https://github.com/AmrTamer23/at23-static-web/tree/main#readme`
  );
  console.log("🚀 Happy coding!");
}

main().catch((error) => {
  console.error("Error:", error);
});
