#!/usr/bin/env python3
import sys
from pathlib import Path
from PIL import Image

QUALITY = 85  # adjust 0-100 (higher = better quality, bigger file)

folder = Path(__file__).parent

for ext in ("*.jpg", "*.jpeg", "*.JPG", "*.JPEG", "*.png", "*.PNG"):
    for img_path in folder.glob(ext):
        webp_path = img_path.with_suffix(".webp")
        try:
            with Image.open(img_path) as im:
                im.save(webp_path, "webp", quality=QUALITY)
            img_path.unlink()  # delete original
            print(f"Converted: {img_path.name} -> {webp_path.name}")
        except Exception as e:
            print(f"Failed on {img_path.name}: {e}")

print("Done.")