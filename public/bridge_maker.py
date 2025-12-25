import base64
import requests

image_bytes = None
with open("./bridge.jpg", "rb") as f:
    image_bytes = f.read()

# Encode it
base64_string = base64.b64encode(image_bytes).decode('utf-8')

# Print the formatted Data URI
print(base64_string[:1000])

# Unblurred
newFileTxt = f"""
<svg 
    id="exampleSvg"
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
    <filter id="scalable-wave" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.02"
        numOctaves="1" 
        result="noise" 
        />
        
        <feDisplacementMap 
        in="SourceGraphic" 
        in2="noise" 
        scale="40"
        xChannelSelector="R" 
        yChannelSelector="G" 
        />
    </filter>

    <mask id="responsive-mask">
        <rect 
        x="2.5%" y="2.5%" 
        width="95%" height="95%" 
        fill="white" 
        filter="url(#scalable-wave)" 
        />
    </mask>
    </defs>

    <image 
    href="data:image/jpeg;base64,{base64_string}" 
    width="100%" height="100%" 
    preserveAspectRatio="xMidYMid slice" 
    mask="url(#responsive-mask)" 
    />
</svg>
"""

# Blurred
newNewFileTxt = f"""
<svg 
    id="exampleSvg"
    xmlns="http://www.w3.org/2000/svg"
>
    <defs>
        <filter id="scalable-wave" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.02"
                numOctaves="1" 
                result="noise" 
            />
            <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="40"
                xChannelSelector="R" 
                yChannelSelector="G" 
            />
        </filter>

        <filter id="final-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>

        <mask id="responsive-mask">
            <rect 
                x="2.5%" y="2.5%" 
                width="95%" height="95%" 
                fill="white" 
                filter="url(#scalable-wave)" 
            />
        </mask>
    </defs>

    <image 
        href="data:image/jpeg;base64,{base64_string}" 
        width="100%" height="100%" 
        preserveAspectRatio="xMidYMid slice" 
        mask="url(#responsive-mask)" 
        filter="url(#final-blur)"
    />
</svg>
"""

with open("./wavy_bridge_blur.svg", "w") as f:
    f.write(newNewFileTxt)
