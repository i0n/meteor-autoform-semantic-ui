/*
 * Template helpers for "semantic_ui" template
 */

Template['afFieldLabel_semantic_ui'].atts = function bsFieldLabelAtts() {
  var atts = (this || {}).atts;
  var labelAtts = _.omit(atts, 'name', 'autoform', 'template');
  // Add bootstrap class if necessary
  if (typeof labelAtts['class'] === "string") {
    labelAtts['class'] += " control-label"; //might be added twice but that shouldn't hurt anything
  } else {
    labelAtts['class'] = "control-label";
  }
  // Add "for" attribute if missing
  labelAtts['for'] = labelAtts['for'] || atts['name'];
  return labelAtts;
};

Template['afDeleteButton_semantic_ui'].atts = function bsDeleteButtonAtts() {
  var atts = this || {};
  var buttonAtts = _.omit(atts, '_af', 'collection', 'doc', 'contentBlock', 'type');
  // Add bootstrap class if necessary
  if (typeof buttonAtts['class'] === "string") {
    buttonAtts['class'] += " btn btn-danger"; //might be added twice but that shouldn't hurt anything
  } else {
    buttonAtts['class'] = "btn btn-danger";
  }
  return buttonAtts;
};

Template['quickForm_semantic_ui'].submitButtonAtts = function bsQuickFormSubmitButtonAtts() {
  var context = this;
  var atts = {type: "submit"};
  atts['class'] = 'btn btn-primary';
  if (typeof context.buttonClasses === "string") {
    atts['class'] += ' ' + context.buttonClasses;
  }
  return atts;
};
