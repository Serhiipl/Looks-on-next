import React, { Component } from "react";
import { render } from "react-dom";
import SimpleGallery from "./SimpleGallery";

interface AppProps {}
interface AppState {
  name: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <SimpleGallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg",
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg",
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg",
              thumbnailURL:
                "https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg",
              width: 2500,
              height: 1666,
            },
          ]}
        />
      </div>
    );
  }
}

render(<App />, "root");
