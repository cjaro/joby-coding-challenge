# Frontend Task

Create an app that displays a vertical scrolling grid of images. When an image is tapped/clicked on, a higher resolution version of the image should be displayed. You can use whatever technology you're comfortable with. Please comment as if the person reading your code is familiar with the technology you're using.

## Requirements

- Make a network request to the Unsplash API
- Display grid of thumbnails
- Display full sized image
- Search field for changing query to Unsplash API

## Extra Credit

- Support pagination (automatic or manual)
- Add pinch to zoom on full size image
- Add a share dialog
- Add Joby branding

## Unsplash API

- Register for a developer account (free) at https://unsplash.com/developers and get an access key
- Documentation: https://unsplash.com/documentation
- Search for kitten pictures: https://api.unsplash.com/search/photos\?client_id=ACCESSKEY&query=kittens

Example response with only relevant data
```
{
    "total": 4278,
    "total_pages": 428,
    "results": [
        {
        "width": 3200,
        "height": 2361,
        "urls": {
          "raw": "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ&ixlib=rb-1.2.1",
          "full": "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ&ixlib=rb-1.2.1&q=85",
          "regular": "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ&ixlib=rb-1.2.1&q=80&w=1080",
          "small": "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ&ixlib=rb-1.2.1&q=80&w=400",
          "thumb": "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ&ixlib=rb-1.2.1&q=80&w=200"
        },
        "links": {
          "self": "https://api.unsplash.com/photos/1l2waV8glIQ",
          "html": "https://unsplash.com/photos/1l2waV8glIQ",
          "download": "https://unsplash.com/photos/1l2waV8glIQ/download",
          "download_location": "https://api.unsplash.com/photos/1l2waV8glIQ/download?ixid=MnwyMjAxMjB8MHwxfHNlYXJjaHwxfHxraXR0ZW5zfGVufDB8fHx8MTYxNzQwMjQ5OQ"
        },
      }
    ]
}
```

### Joby Branding

- <span style="color:#FF9700">Orange: #FF9700</span> 
- <span style="color:#0F1621">Dark: #0F1621</span> 
- <span style="color:#EEE8DD">Light: #EEE8DD</span>

