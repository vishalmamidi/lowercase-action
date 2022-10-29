# GitHub Action to change string to lowercase or upper case 

- lowercase (`VishalMamidi` -> `vishalmamidi`)
- uppercase (`VishalMamidi` -> `VISHALMAMIDI`)

## examples

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
        
      - name: Run a one-line script
        run: echo ${{ steps.string.outputs.lowercase }}
```
