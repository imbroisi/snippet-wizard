const SNIPPET_PATTERN =
`{  
  "{{NAME}}": {
    "scope": "html, javascript, typescript, javascriptreact, typescriptreact",
    "prefix": "{{PREFIX}}",
    "body": [
      {{BODY}}
    ]
  }
}
`

export const generateFinalContent = (name: string, prefix: string, body: string) => {
  const bodyArray = body.replace(/"/g, '\\"').split('\n');
  const bodyFormated = bodyArray
    .map((line, index) => {
      const comma = index === bodyArray.length - 1 ? '' : ',';
      return index === 0 ? `"${line}"${comma}` : `      "${line}"${comma}`
    }).join('\n');

  return SNIPPET_PATTERN
    .replace(/{{NAME}}/g, name)
    .replace(/{{PREFIX}}/g, prefix)
    .replace(/{{BODY}}/g, bodyFormated)
}