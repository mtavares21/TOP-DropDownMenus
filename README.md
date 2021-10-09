# Rango Dropdown Menu

#### Another Odin Project challenge!

Here you can access the source code and instructions for my first __npm__ published module : "rango-dropdownmenu".

It's a simple dropdown menu with a nice feel, and the capacity of adapting colors to your background.

## Live Preview

https://mtavares21.github.io/TOP-DropDownMenus/

### Setup

Really simple. Just setup your html file like the example, respecting the classes names, and adjust to your project with setUp().

In you project folder:
```
npm install "rango-dropdownmenu"
```
__your_file.html__
```html
<nav role="navigation">
        <ul class='dropNav'>
            <div class='dropContain'>
                <li class='dropTrigger' aria-haspopup="true">Home</li>
                <ul class='dropList' aria-label="submenu">
                    <li class='dropItem'>Projects</li>
                    <li class='dropItem'>Documentation</li>
                    <li class='dropItem'>Media</li>
                    <li class='dropItem'>Downloads</li>
                </ul>
            </div>
             <div class='dropContain'>
                <li class='dropTrigger' aria-haspopup="true">About</li>
                <ul class='dropList' aria-label="submenu">
                    <li class='dropItem'>Projects</li>
                    <li class='dropItem'>Documentation</li>
                    <li class='dropItem'>Media</li>
                    <li class='dropItem'>Downloads</li>
                </ul>
            </div>
            <div class='dropContain'>
                <li class='dropTrigger' aria-haspopup="true">Contacts</li>
                <ul class='dropList' aria-label="submenu">
                    <li class='dropItem'>Projects</li>
                    <li class='dropItem'>Documentation</li>
                    <li class='dropItem'>Media</li>
                    <li class='dropItem'>Downloads</li>
                </ul>
            </div>
        </ul>
    </nav>
```
__your_file.js__
```javascript
import 'rango-dropdownmenu'
import setUp from 'rango-dropdownmenu'
//setUp(fontFamily, fontSize, rango)
setUp('Lato', '20', [200, 200, 200])
```

If you want an external font don´t forget to add it to your html.

The menu suports as many items as you need, you cant even use it as a basic dropdown button.

The __rango__ factor is an array with the RGB colors of the dropdown background in your project, if you skip this parameter you'll get the
default colors, otherwise he will try to adapt to your menu.
