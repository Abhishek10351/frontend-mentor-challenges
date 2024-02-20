# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U).

## The challenge

We have to build out this NFT preview card component and get it looking as close to the design as possible.

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

## Screenshot

![Preview](./design/desktop-preview.jpg)

## Links

- Solution URL: [Here](https://github.com/Abhishek10351/frontend-mentor-challenges)
- Live Site URL: [Live Site](https://abhishek10351.github.io/frontend-mentor-challenges/nft-preview-card-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

We can use ::after and ::before pseudo elements to add overlaying elements to the main element.

```css
.nft-card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.75) 100%
    );
}
```
