import urllib.request
import json

url = "https://api.github.com/users/bansimplified567/repos?sort=updated&direction=desc&per_page=100"
with urllib.request.urlopen(url) as response:
    data = json.load(response)

for repo in data:
    if not repo['fork']:
        print(f"{repo['name']} | {repo['language'] or 'N/A'} | stars: {repo['stargazers_count']} | forks: {repo['forks_count']} | {repo['description'] or 'No description'}")