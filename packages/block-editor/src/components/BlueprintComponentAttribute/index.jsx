import classNames from "classnames";
import { memo, useCallback, useMemo, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  convertObjectToStylePropertiesString,
  convertStylePropertiesStringToObject,
  getComponentAttributeType,
} from "../../functions";

import {
  getBlockComponent,
  setComponentAttribute,
  unsetComponentAttribute,
} from "../../store/block-blueprint";
import { setFocus, unsetFocus } from "../../store/editor";

import EditableString from "../EditableString";

import "./style.css";

function BlueprintComponentAttribute({
  clientId,
  children = {},
  attributeName = "",
  attributeValue = "",
  ...props
}) {
  const dispatch = useDispatch();

  let component = useSelector((state) =>
    getBlockComponent(state.blockBlueprint, clientId),
  );

  const ref = useRef(null);
  const attributeNameRef = useRef(null);

  const _attributeName = useMemo(() => attributeName || "", [attributeName]);

  const _attributeValue = useMemo(() => attributeValue || "", [attributeValue]);

  const [attributeValueValid, setAttributeValueValid] = useState(true);

  const attributeNameValid = useMemo(() => {
    if (!_attributeName?.length) {
      return false;
    }
    return true;
  }, [_attributeName]);

  const attributeType = useMemo(
    () => getComponentAttributeType(component.type, attributeName),
    [attributeName, component.type],
  );

  const { currentFocus } = useSelector((state) => state.editor);

  function onBlurAwait() {
    // This is done to await any potential click events
    // on other elements before blurring away
    //setTimeout( () => {
    dispatch(unsetFocus());
    //}, 150 )
  }

  const onChangeAttributeName = useCallback(
    (newAttributeName) => {
      dispatch(
        unsetComponentAttribute({
          clientId,
          attribute: _attributeName,
        }),
      );

      dispatch(
        setComponentAttribute({
          clientId,
          attribute: newAttributeName,
          value: newAttributeValue,
        }),
      );

      dispatch(
        setFocus({
          clientId,
          context: "component",
          property: "attributeName",
          attributeName: newAttributeName,
          attributeValue: newAttributeValue,
        }),
      );
    },
    [_attributeName, _attributeValue],
  );

  const onChangeAttributeValue = useCallback(
    (newAttributeValue) => {
      dispatch(
        setComponentAttribute({
          clientId,
          attribute: _attributeName,
          value: newAttributeValue,
        }),
      );

      dispatch(
        setFocus({
          clientId,
          context: "component",
          property: "attributeValue",
          attributeName: _attributeName,
          attributeValue: newAttributeValue,
        }),
      );
    },
    [_attributeName],
  );

  const onDeleteAttributeName = useCallback(() => {
    if (String(_attributeValue).length > 0) {
      return;
    }

    dispatch(
      unsetComponentAttribute({
        clientId,
        attribute: _attributeName,
      }),
    );
    dispatch(unsetFocus());
  }, [_attributeName, _attributeValue]);

  const onFocusAttributeName = useCallback(() => {
    dispatch(
      setFocus({
        clientId,
        context: "component",
        property: "attributeName",
        attributeName: _attributeName,
        attributeValue: _attributeValue,
      }),
    );
  }, [_attributeName, _attributeValue]);

  const onFocusAttributeValue = useCallback(() => {
    dispatch(
      setFocus({
        clientId,
        context: "component",
        property: "attributeValue",
        attributeName: _attributeName,
        attributeValue: _attributeValue,
      }),
    );
  }, [_attributeName, _attributeValue]);

  return (
    <div
      ref={ref}
      className={classNames(
        "BlueprintComponentAttribute",
        `is-${attributeType}`,
        {
          "is-invalid": !attributeNameValid,
        },
      )}
    >
      <span ref={attributeNameRef} className="BlueprintComponentAttribute-name">
        <EditableString
          placeholder="attribute"
          value={_attributeName}
          onBlur={onBlurAwait}
          onChange={onChangeAttributeName}
          onFocus={onFocusAttributeName}
          onDelete={onDeleteAttributeName}
        />
      </span>

      <span className="BlueprintComponentAttribute-seperator">{"="}</span>

      <span className="BlueprintComponentAttribute-quote">{'"'}</span>
      <span className="BlueprintComponentAttribute-value">
        <EditableString
          value={String(attributeValue)}
          onBlur={onBlurAwait}
          onChange={onChangeAttributeValue}
          onFocus={onFocusAttributeValue}
        />
      </span>
      <span className="BlueprintComponentAttribute-quote">{'"'}</span>

      {children}
    </div>
  );
}

export default BlueprintComponentAttribute;
