import os
from PyPDF2 import PdfReader

os.makedirs(r'd:\RESEARCH\CRWM\assets\images', exist_ok=True)
reader = PdfReader(r'd:\RESEARCH\CRWM\MEWM SA de CV.pdf')

count = 0
for i, page in enumerate(reader.pages):
    try:
        for j, img in enumerate(page.images):
            ext = img.name.split('.')[-1] if '.' in img.name else 'png'
            fname = f'page{i+1}_img{j}.{ext}'
            fpath = os.path.join(r'd:\RESEARCH\CRWM\assets\images', fname)
            with open(fpath, 'wb') as f:
                f.write(img.data)
            print(f'Saved: {fname} ({len(img.data)} bytes)')
            count += 1
    except Exception as e:
        print(f'Page {i+1} error: {e}')

print(f'\nTotal images extracted: {count}')
