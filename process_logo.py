from PIL import Image

# NewsBreak: just convert JPEG to PNG keeping everything
newsbreak_input = "/Users/lucascoelho/Desktop/ratoeirahub/public/newbreaklogo.jpeg"
newsbreak_output = "/Users/lucascoelho/Desktop/ratoeirahub/public/newbreaklogo.png"
img_nb = Image.open(newsbreak_input).convert("RGBA")
img_nb.save(newsbreak_output)
print(f"Saved {newsbreak_output} (background preserved)")

# Taboola: remove white background
taboola_input = "/Users/lucascoelho/Desktop/ratoeirahub/public/taboolalogo.jpeg"
taboola_output = "/Users/lucascoelho/Desktop/ratoeirahub/public/taboolalogo.png"
img_tb = Image.open(taboola_input).convert("RGBA")
data = img_tb.getdata()

new_data = []
for r, g, b, a in data:
    # Detect white/light background
    if r > 240 and g > 240 and b > 240:
        new_data.append((255, 255, 255, 0))
    else:
        new_data.append((r, g, b, a))

img_tb.putdata(new_data)
img_tb.save(taboola_output)
print(f"Saved {taboola_output} (white background removed)")
