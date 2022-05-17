# Current tasks

## Add style

- Each match should be in the separate row 
- Style of text should be: 
```md
<home-team> <score> <away-team>
       <date and time>
<home scorers>      <away scorers>  
            <stadium>
            <referee>

For example:
Benfica 3 - 0 Barcelona
      01:00 29.09.2021
Darwin, 12
Felix, 32
Darwin, 55
        Benfica Dragao Stadium
        Daniel Orsato
```

- Just try to make the site look professional

## Get all matches

- Add match status to each match component
  - If match.status = 'FINISHED' => display yellow circle
  - if match.status = 'LIVE' => display red circle
  - else => display green circle

## Add a page for single Match

- Add links to each match in the matches page
- When user clicks on the match link
- Use `react-router` like in the last project
- Make match page detail like you want

## If you want more information about matches go to this documentation and see what you can find:

https://www.football-data.org/documentation/quickstart

