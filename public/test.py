#!/usr/bin/env python3
import sys
from pathlib import Path
from PIL import Image
QUALITY = 85  # adjust 0-100 (higher = better quality, bigger file)
folder = Path(__file__).parent
for ext in ("*.jpg", "*.jpeg", "*.JPG", "*.JPEG", "*.png", "*.PNG"):
    for img_path in folder.rglob(ext):
        webp_path = img_path.with_suffix(".webp")
        try:
            with Image.open(img_path) as im:
                im.save(webp_path, "webp", quality=QUALITY)
            img_path.unlink()  # delete original
            print(f"Converted: {img_path.relative_to(folder)} -> {webp_path.relative_to(folder)}")
        except Exception as e:
            print(f"Failed on {img_path.relative_to(folder)}: {e}")
print("Done.")