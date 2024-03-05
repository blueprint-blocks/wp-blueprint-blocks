import { getComponentContext } from "../selectors";
import insertExistingComponentAtPosition from "./insert-existing-component-at-position";
import insertNewComponentAtPosition from "./insert-new-component-at-position";
import unsetDraggingComponent from "./unset-dragging-component";

const insertDraggingComponentAtPosition = (state, action) => {
  const { context = "edit", position = [] } = action.payload || {};

  if (!state.newDraggingComponent && !state.existingDraggingComponent) {
    return;
  }

  if (!!state.newDraggingComponent) {
    insertNewComponentAtPosition(state, {
      payload: {
        component: state.newDraggingComponent,
        context,
        position,
      },
    });
  } else if (!!state.existingDraggingComponent) {
    const currentContext = getComponentContext(
      state,
      state.existingDraggingComponent,
    );

    if (context === currentContext.context) {
      // compare positions and decrement if dragging higher
      for (let i = 0; i < currentContext.position.length; i++) {
        if (position.length > i && position[i] > currentContext.position[i]) {
          position[i]--;
          break;
        }
      }
    }

    insertExistingComponentAtPosition(state, {
      payload: {
        context: currentContext.context,
        newContext: context,
        position: currentContext.position,
        newPosition: position,
      },
    });
  }

  unsetDraggingComponent(state);
};

export default insertDraggingComponentAtPosition;
