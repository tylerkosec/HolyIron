"""Run ONCE right after the launch deploy is live. Tells Bing (and the other IndexNow engines) about every page.
    python seo/ping_indexnow.py
Bing's index also feeds ChatGPT search and Copilot. Google does not use IndexNow; it reads the sitemap via Search Console."""
import json, re, urllib.request, os
HERE = os.path.dirname(os.path.abspath(__file__))
key = open(os.path.join(HERE, 'indexnow-key.txt'), encoding='utf-8').read().strip()
urls = re.findall(r'<loc>(.*?)</loc>', open(os.path.join(HERE, '..', 'public', 'sitemap.xml'), encoding='utf-8').read())
body = json.dumps({'host': 'www.holyirontattoo.com', 'key': key, 'keyLocation': 'https://www.holyirontattoo.com/%s.txt' % key, 'urlList': urls}).encode()
req = urllib.request.Request('https://api.indexnow.org/indexnow', data=body, headers={'Content-Type': 'application/json; charset=utf-8'})
print(urllib.request.urlopen(req).status, 'sent', len(urls), 'pages')
