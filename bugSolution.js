```javascript
// app/layout.js
export default function Layout({ children }) {
  return <html lang="en">{children}</html>;
}

// app/page.js
export default function Home() {
  return (
    <div>Hello World</div>
  );
}
```