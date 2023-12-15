### Criação do projeto

```bash
ng new . --create-application=falase --standalone=false
```

### Criação da biblioteca

```bash
ng g library @ocr-fast/ocr-fast-lib --standalone=false
```

### Criação do componente

```bash
ng g c button
```

Após criar o componente é preciso:

- Fazer a declaração do componente no module
- Fazer o export no public-api
