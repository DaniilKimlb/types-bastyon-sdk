<p align='center'>
  <img src='./logo.png' alt='PocketNet' width='200'/>
</p>

<h6 align='center'>
<a href="https://github.com/DaniilKimlb/types-bastyon-sdk">GitHub Repository</a>
</h6>

<h5 align='center'>
<b>Bastyon SDK Type Definitions</b>
</h5>

## Bastyon SDK Type Definitions

This project provides TypeScript type definitions for the Bastyon SDK, enabling better development experience and safety when interacting with the Bastyon platform in TypeScript projects.

## Installation

Install the library directly from the GitHub repository using the following command:

```bash
git clone https://github.com/DaniilKimlb/types-bastyon-sdk.git
```

Alternatively, add the repository as a dependency in your `package.json` file:

```json
{
  "devDependencies": {
    "@types/bastyon-sdk": "github:DaniilKimlb/types-bastyon-sdk"
  }
}
```

## Configuration

To ensure the Bastyon SDK types are properly recognized by TypeScript, add the following to your `tsconfig.json` file under the `compilerOptions.types` field:

```json
{
  "compilerOptions": {
    "types": ["bastyon-sdk"]
  }
}
```

This configuration ensures that TypeScript includes the Bastyon SDK type definitions during compilation, providing full support for autocompletion and type checking.

## License

This project is licensed under the Apache-2.0 License. See the [LICENSE](./LICENSE) file for more information.

---
