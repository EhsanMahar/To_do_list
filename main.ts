import inquirer from "inquirer";
import chalk from "chalk";

let todoList=[];
let conditions=true;

console.log(chalk.blue.bold("\n \t Wellcome with Ehsan Mahar _Todo_List \n"));

while(conditions){
    let addTask=await inquirer.prompt([
{
    name:"task",
    type:"input",
    message: chalk.yellow("Enter Your New Task:")
}
 ]);
 todoList.push(addTask.task);
 console.log(`${addTask.task} Task added in Todo_list `);
 
let addMoreTask = await inquirer.prompt([
{
    name:"addmore",
    type:"confirm",
    message:"do you want to add more Task?",
    default:"False"
}

]);
conditions =addMoreTask.addmore

};
console.log("Your updated To-do_list:",todoList);
