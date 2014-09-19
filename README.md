# jQuery Model
An extreme simple, minimalist, highly customizable modal based on jQuery.

### Dependencies
The only hard dependency is [jQuery](http://jquery.com).

### Installation
You can pick your file on
[/dist/](https://github.com/chiefGui/jquery.model/tree/master/dist/)'s folder, or downloading
by Bower:

```
bower install jquery.model
```

### Usage

Model is decoupled and free. There's no pattern you have to follow to use it.
Just to getting started, let's display a modal triggered by a click:

```html
<button id="box">Open the box!</button>

<div id="box-model" class="model model-default">
  Hello, world!
</div>
```

Then, after your markup:

```js
$('#box').on('click', function () {
  $(this).model();
});
```

And voi là!

If you want to adjust the `width` and `height`, you can use the same options
this way:

```js
$('#box').on('click', function () {
  $(this).model({
    width: '50%',
    height: 300 // if you omit the size unit, "pixel" will be considered.
  });
});
```

### Customisation
You can customize your Model's fashion by simply creating your design class.
In the **Usage** section, we used `.model-default` as one of the Model's class,
and there is your style – you can create your own.

*Attention: `.model` is the modal's structure. It is important and you have to
keep it, unless you want your own position structure.*

### License
MIT.