# Module: SimpleDate

A module for the [MagicMirror](https://github.com/MagicMirrorOrg/MagicMirror) that uses [momentjs](https://momentjs.com) to pass the result from a date function to a div on some configurable loop.

## Setup

Clone the module into your modules folder:

```bash
cd ~/MagicMirror/modules && git clone https://github.com/mathew-fleisch/MMM-SimpleDate
```

## Configuration

Date format cheatsheet: https://devhints.io/moment

```javascript
{
  module: 'MMM-SimpleDate',
  position: 'top_right',
  config: {
    // Unique id allows multiple modules with isolated css target 
    dateDivId: "SimpleDate",
    // Date format cheatsheet: https://devhints.io/moment
    dateFormat: "h:mm:ss a",
    // In seconds
    updateInterval: 1,
  }
}
```

## Styling

The [template](MMM-SimpleDate.njk) uses the class `.SimpleDate` and passes the `config.dateDivId` value to the div's id field to enable multiple versions of this module to be easily styled in the same display. Add something similar to your css/custom.css file.

```css
#SimpleDate {
  position: absolute;
  top: -46px;
  right: 10px;
  color: #946044;
  font-size: 17px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}
```
