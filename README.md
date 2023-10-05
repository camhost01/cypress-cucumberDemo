# cypress-cucumberDemo
This project is a practice based in Cypress 10 and Cucumber(gherkin) for testers who want to learn how can automate a webpage (https://automationexercise.com/),

<b>Requirements</b>
 - Visual Studio Code
 - Node.js
 - Git
 
<b>#1 Create a folder in your local</b>

<img width="270" alt="image" src="https://user-images.githubusercontent.com/39304271/210273421-31897e7e-58cb-42e5-a709-397ae66caed0.png">

<b>#2 Cloning the existing project</b>

Open VSC and clone the project to your local with git clone https://github.com/camhost01/cypress-cucumberDemo.git

<img width="1456" alt="image" src="https://user-images.githubusercontent.com/39304271/210273513-6d6ebec5-4ddd-468a-92bd-adc19d26c5dd.png">

move to the folder
```sh
cd cypress-cucumberDemo
```

Install cypress
```sh
npm install cypress@12.2.0 --save-dev
```

<b>#4 Execute the project</b>

For execute you can use in the terminal the command: npm run cy:open, this cypress interface is opened

<b>#5 Select E2E Testing</b>

<img width="730" alt="image" src="https://user-images.githubusercontent.com/39304271/210267379-399f9df1-dbb8-47de-9cc9-981fa266fa24.png">

and select a browser to execute

<img width="726" alt="image" src="https://user-images.githubusercontent.com/39304271/210267475-706c38ee-a3ef-4f9e-b54a-399442269d51.png">

<b>#6 Select a feature to test</b>

<img width="1246" alt="image" src="https://user-images.githubusercontent.com/39304271/210267508-7e41b328-89a1-468e-89fc-30a63e941805.png">

<b>Enjoy!</b>
<img width="1675" alt="image" src="https://user-images.githubusercontent.com/39304271/210274032-02178ad2-ff3f-4f59-8fdd-102d2ce26208.png">
<img width="1658" alt="image" src="https://user-images.githubusercontent.com/39304271/210274068-ed5129e4-2404-4130-a284-012d316323dc.png">

## Execute the project by script
When use the execution by script, the entire features are executed

<img width="787" alt="image" src="https://github.com/camhost01/cypress-cucumberDemo/assets/39304271/8d4bb0a7-5058-4562-bd1c-a6f51619ea8c">

# Mochawesome Report
Install dependencies in the project

```sh
npm install mochawesome cypress-mochawesome-reporter mochawesome-merge mochawesome-report-generator --save-dev
```

After execute the project by scrip, a folder with .json are created, those json represent the feature executed 

<img width="471" alt="image" src="https://github.com/camhost01/cypress-cucumberDemo/assets/39304271/b6e2b522-8897-4dd2-937c-27fc8ce4cb97">

Then, run the script "generateReport"

<img width="1137" alt="image" src="https://github.com/camhost01/cypress-cucumberDemo/assets/39304271/fd902a90-3c85-44c2-9efe-b9d8f135f88b">

And, in the mochawesome-report folder a .html is created

<img width="1569" alt="image" src="https://github.com/camhost01/cypress-cucumberDemo/assets/39304271/dc05301c-dc09-4e9b-bc13-c26c85a270b9">

<img width="1779" alt="image" src="https://github.com/camhost01/cypress-cucumberDemo/assets/39304271/d41db3d7-759f-46f1-bcae-0882111f3b7f">
