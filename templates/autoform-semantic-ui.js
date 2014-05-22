/*
 * Template helpers for "semanticUi" template
 */

Template['afFieldLabel_semanticUi'].atts = function uiFieldLabelAtts() {
  var atts = (_.clone(this || {})).atts;
  var labelAtts = _.omit(atts, 'name', 'autoform', 'template');
  if (typeof labelAtts['class'] === "string") {
    labelAtts['class'] += " ui label"; //might be added twice but that shouldn't hurt anything
  } else {
    labelAtts['class'] = "ui label";
  }
  // Add "for" attribute if missing
  labelAtts['for'] = labelAtts['for'] || atts['name'];
  return labelAtts;
};

Template['afDeleteButton_semanticUi'].atts = function uiDeleteButtonAtts() {
  var atts = this || {};
  var buttonAtts = _.omit(atts, '_af', 'collection', 'doc', 'contentBlock', 'type');
  if (typeof buttonAtts['class'] === "string") {
    buttonAtts['class'] += " ui red button"; //might be added twice but that shouldn't hurt anything
  } else {
    buttonAtts['class'] = "ui red button";
  }
  return buttonAtts;
};

Template['quickForm_semanticUi'].submitButtonAtts = function uiQuickFormSubmitButtonAtts() {
  var context = this;
  var atts = {type: "submit"};
  atts['class'] = 'ui submit blue button';
  if (typeof context.buttonClasses === "string") {
    atts['class'] += ' ' + context.buttonClasses;
  }
  return atts;
};
