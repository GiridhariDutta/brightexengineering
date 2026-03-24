import os
from PIL import Image

def convert_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            try:
                img = Image.open(filepath)
                # Convert RGBA to RGB if needed
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    alpha = img.convert('RGBA').split()[-1]
                    bg = Image.new('RGB', img.size, (255, 255, 255))
                    bg.paste(img, mask=alpha)
                    img = bg
                
                webp_filename = os.path.splitext(filename)[0] + '.webp'
                webp_filepath = os.path.join(directory, webp_filename)
                
                img.save(webp_filepath, 'webp')
                print(f"Converted {filename} to {webp_filename}")
                
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == '__main__':
    convert_to_webp(r'd:\projects\Britex\assets\images')
