import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCategory,
  setDescription,
  setIcon,
  setKeywords,
} from "../../store/block-json";

import { setChanged } from "../../store/post-metadata";

import { useFocus } from "../../hooks";

import BlockNameField from "../BlockNameField";
import BlockTitleField from "../BlockTitleField";
import BlockSupportsField from "../BlockSupportsField";
import BlockVersionField from "../BlockVersionField";
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
    dispatch(setChanged(true));
  };

  const setBlockCategory = (category) => {
    dispatch(setCategory(category));
    dispatch(setChanged(true));
  };

  const setBlockIcon = (icon) => {
    dispatch(setIcon(icon));
    dispatch(setChanged(true));
  };

  const setBlockKeywords = (keywords) => {
    dispatch(setKeywords(keywords));
    dispatch(setChanged(true));
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
            <BlockTitleField
              onBlur={() => onBlur("title")}
              onFocus={() => onFocus("title")}
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
            <BlockSupportsField />
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
