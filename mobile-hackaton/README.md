# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



/lectures => lista as aulas do dia


eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsdW5vQGZpYXAuY29tIiwic3ViIjozLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczODYzNjEyMCwiZXhwIjoxNzM4NzIyNTIwfQ.kB4l5N1N49cAuyH5AvfpXbe-AUO-MVcLy003T_DGpoWpM7VyMB_nlWIwMnkSfjNV-l7Nf3tENjeThnfwgvaOvfcTSdJHUq72gyu5SQWKvzLfMdGreQcryyIsjkALO1A6nPJznOxRSMlaTWJU1fl8Qr_9kq0zrjWXGiYvJi1I35qGC8B5RaeZwF47zGv8efxHHidyNfkZJUBER5iGweq8ZJ2QuVxPvtBn4jLrCQNLncxVwHESXG2TBaMJkmYZktULMqv615hgyD4gTShOimy2MDPKQcCT8V3OVOQNVEJErDO03IQu8hHW6XlW0WGY5mHkG8Bh7wvUxBWvqQlRNkV_qg => extrai o id do aluno pelo token para adicionar na requisição 

{{serverJoao}}lectures/1/attendances?schoolId=1

{{serverJoao}}lectures/1/attendances/3?schoolId=1



-----------------------------------------------


{{requisitos}} 

[ ] - Adicionar um icone de slash

[x] - Precisa adicionar a logica que zera o token do usuario apos clicar no botão de sair;

* Adicionar no inicio do aplicativo uma validacao que verifica o usuario já possui um token e um schoolId, se sim, já redireciona para tela home do logado;

[x] - Adicionar a opcao para que assim que clicar na disciplina seja exibido a interface do usuario a descrição da disciplina/aula (Data de inicio, fim, descrição da aula);

[] - O botão de checkin da disciplina só pode aparecer ativo quando o usuário estiver dentro do tempo mínimo exibido para disciplina.

[] - Na tela de Foco total, ele haver um botão que abre o forum do aplicativo e permite somente retornar para esta tela de focus e para mais nada.

[] - Ao clicar em finalizar, deve registrar o check-out;

[] - Descobrir porque o aplicativo não gerou apk;


