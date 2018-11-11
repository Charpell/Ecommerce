Cart

## Debugging in Node

### Common Errors
Can not find a Program To Debug
Unverified breakpoint
Attribute 'program' does not exist ('/Users/andeladeveloper/Desktop/Project/Ecommerce/index.js').


### Setup Configuration
Switch to node version 8 or higher
nvm use 8


Debug -> Add Configuration 

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}


Add Configuration
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js",
      
    }
  ]
}


Stop your server


Run Debug





