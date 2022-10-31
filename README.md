# GitHub Action to change string to lowercase or upper case 

- steps.string.outputs.lowercase  (`VishalMamidi` -> `vishalmamidi`)
- steps.string.outputs.uppercase  (`VishalMamidi` -> `VISHALMAMIDI`)

## example

```
name: upper-to-lower
on: [push]
jobs:
  convert:
    steps:
      - id: string
        uses: vishalmamidi/lowercase-action@v1
        with:
          string: ${{ github.event.repository.name }}
        
      - name: log lowercase repo name
        run: echo ${{ steps.string.outputs.lowercase }}

      - name: log uppercase repo name
        run: echo ${{ steps.string.outputs.uppercase }}
        
```
