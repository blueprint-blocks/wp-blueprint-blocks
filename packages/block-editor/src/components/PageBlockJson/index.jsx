import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setDescription,
  setIcon,
  setKeywords,
  setTitle,
} from "../../store/block-json";

import { useFocus } from "../../hooks";

import BlockNameField from "../BlockNameField";
import BlockVersionField from "../BlockVersionField";
import CheckboxField from "../CheckboxField";
import JsonEditor from "../JsonEditor";
import ListField from "../ListField";
import DashiconsField from "../DashiconsField";
import SelectField from "../SelectField";
import TextField from "../TextField";

import "./style.css";

const { blockNamespace = "blueprint-blocks" } =
  blueprintBlocksEditorSettings?.blockMetadata || {};

function PageBlockJson() {
  const dispatch = useDispatch();

  const blockJson = useSelector((state) => state.blockJson || {});

  const setBlockDescription = (description) => {
    dispatch(setDescription(description));
  };

  const setBlockCategory = (category) => {
    dispatch(setCategory(category));
  };

  const setBlockIcon = (icon) => {
    dispatch(setIcon(icon));
  };

  const setBlockKeywords = (keywords) => {
    dispatch(setKeywords(keywords));
  };

  const setBlockTitle = (title) => {
    dispatch(setTitle(title));
  };

  const [hasFocus, onBlur, onFocus] = useFocus([]);

  return (
    <div className="PageBlockJson">
      <div className="PageBlockJson-grid">
        <div className="PageBlockJson-fields">
          <div className="PageBlockJson-fieldset" style={{ gap: "var(--1x)" }}>
            <BlockNameField />
            <BlockVersionField />
          </div>

          <div className="PageBlockJson-fieldset">
            <DashiconsField
              name="icon"
              label="Block icon"
              value={blockJson?.icon}
              setValue={setBlockIcon}
            />
            <TextField
              label="Enter a title..."
              tooltip="Hello..."
              value={blockJson?.title}
              setValue={setBlockTitle}
              onFocus={() => onFocus("title")}
              onBlur={() => onBlur("title")}
            />
            <TextField
              label="Enter a description..."
              tooltip="Hello..."
              multiLine={true}
              rows={4}
              value={blockJson?.description}
              setValue={setBlockDescription}
              onFocus={() => onFocus("description")}
              onBlur={() => onBlur("description")}
            />
            <ListField
              label="Enter a few keywords..."
              placeholder="Enter a keyword..."
              tooltip="Keywords are used to find your block when searching in the editor."
              value={blockJson?.keywords}
              setValue={setBlockKeywords}
              onFocus={(index) => onFocus("keywords", index)}
              onBlur={(index) => onBlur("keywords", index)}
              max={3}
            />
            <SelectField
              name="category"
              label="Category"
              tooltip="Hello..."
              options={[
                {
                  label: "Common",
                  value: "common",
                },
                {
                  label: "Layout",
                  value: "layout",
                },
              ]}
              value={blockJson?.category}
              setValue={setBlockCategory}
              onFocus={() => onFocus("category")}
              onBlur={() => onBlur("category")}
            />
          </div>

          <div className="PageBlockJson-fieldset">
            <div className="PageBlockJson-header">
              <div>{"Block Supports"}</div>
            </div>
            <CheckboxField label={"Anchor"} value={false}>
              <p>
                {
                  "Anchors let you link directly to a specific block on a page. This property adds a field to define an id for the block and a button to copy the direct link."
                }
                <br />
                <a href="#">{"Learn more"}</a>
              </p>
            </CheckboxField>
            <CheckboxField label={"Align"} value={true}>
              <p>
                {
                  "Alignment adds block controls which allow changing the block’s alignment."
                }
                <br />
                <a href="#">{"Learn more"}</a>
              </p>
              <div className="CheckboxField-list">
                <CheckboxField label={"Left"} size="small" value={true} />
                <CheckboxField label={"Right"} size="small" value={true} />
                <CheckboxField label={"Full"} size="small" value={true} />
                <CheckboxField label={"Wide"} size="small" value={true} />
              </div>
            </CheckboxField>
            <CheckboxField label={"Align Wide"} value={true}>
              <p>
                {
                  "If wide alignment is enabled for the active theme, unchecking this flag will disable wide alignment for this block."
                }
                <br />
                <a href="#">{"Learn more"}</a>
              </p>
            </CheckboxField>
            <CheckboxField label={"Color"} value={true}>
              <p>
                {
                  "Color adds block controls which allow changing the block’s color."
                }
                <br />
                <a href="#">{"Learn more"}</a>
              </p>
              <div className="CheckboxField-list">
                <CheckboxField label={"Background"} size="small" value={true} />
                <CheckboxField label={"Gradients"} size="small" value={false} />
                <CheckboxField label={"Link"} size="small" value={true} />
                <CheckboxField label={"Text"} size="small" value={true} />
              </div>
            </CheckboxField>
          </div>
        </div>
        <div className="PageBlockJson-json">
          <JsonEditor
            focus={hasFocus}
            json={blockJson}
            placeholders={{
              title: "Enter a title for your block...",
              description: "Enter a description for your block...",
              keywords: "Enter a keyword...",
            }}
            values={{
              textdomain: blockJson?.textdomain,
              title: blockJson?.title,
              description: blockJson?.description,
              category: blockJson?.category,
              keywords: blockJson?.keywords,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PageBlockJson;
