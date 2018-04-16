# sass-table-stylization

Sass mixin that allows you to simplify styling table and making it responsive. Originally written for use at <a href="https://mystockreminder.com">Stock Price Alert Service</a>

## Installing
### npm
To install sass-table-stylization using npm, simply run:

```js
npm install sass-table-stylization
```

If you'd like to save sass-table-stylization as a dependency in your project's <code>package.json</code> file, run:

```js
npm install sass-table-stylization --save
```

### Bower
To install sass-table-stylization using bower, simply run 
```js
bower install sass-table-stylization
```
If you'd like to save sass-table-stylization as a dependency in your project's <code>bower.json</code> file, run:
```js
bower install sass-table-stylization --save
```

### Manually

Simply download the _sass_table_stylization.scss file from this repo and place it somewhere useful.

curl

```js
curl -O 
https://raw.githubusercontent.com/MaksymBlank/sass-table-stylization/master/_sass_table_stylization.scss
```

wget
```js
wget https://raw.githubusercontent.com/MaksymBlank/sass-table-stylization/master/_sass_table_stylization.scss
```

## Using

Import _sass_table_stylization.scss in your main.scss
```scss
@import './_sass_table_stylization';
```

Include mixin <code>_responsive_table($options, $styles, $media_query)</code>
```scss
@include _responsive_table($options, $styles, $media_query);
```

### Example
```scss
$options:   (
            table_name: 'responsive-table',
            properties: ('display', 'color', 'text-align')
            );

$styles:    (
            name: (null, grey, center),
            price: (null, blue, null),
            status: (null, null, center)
            );

$media_query: null // Making styles for all devices

@include _responsive_table($options, $styles, $media_query);

// OUTPUT
/*
    .responsive-table-name{
        // display is missing because it equals null
        color: grey;
        text-align: center;
    }

    .responsive-table-price{
        // display is missing because it equals null
        color: grey;
        // text-align is missing because it equals null
    }

    .responsive-table-status{
        // display is missing because it equals null
        // color is missing because it equals null
        text-align: center;
    }
*/
```

## Parameters

### $options<code>:map</code>
- table_name<code>:string</code> - Name of the table's class.

- table_set_title<code>:boolean</code> - true if you want to add class with the same name, but 'title' at the end of the class's name for columns titles

- properties<code>:list</code> - List of all properties that will be using in table

- title_properties_no_show<code>:list</code> - List of all properties that will be forbidden to use in titles classes

### $styles<code>:map</code>
- any_name<code>:map_key</code>( properies<code>:list</code> ) - list of all properties for current name.
> e.g. if <code>any_name</code> equals 'price', it will make the class '.responsive-table-price' in the output above. The list of <code>properties</code> will be added to the current class.


.<code>table_name</code>-<code>styles_map_key</code> {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>properties[i]</code>: <code>styles_map_key_value[i]</code>;<br>
}

### $media_query
$media_query<code>:number</code> - max-width breakpoints for @media()

```scss
@media(max-width: $media_query + 'px'){
    ...
}
```

# Contribute
Please file an issue if you think something could be improved. Please submit Pull Requests when ever possible.

