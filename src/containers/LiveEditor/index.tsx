import React from "react";
import styled from "styled-components";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { Canvas } from "reaflow";

import { getEdgeNodes } from "./helpers";
import { CustomNode } from "../../components/CustomNode";
import { useLoading } from "src/hooks/useLoading";
import { useConfig } from "src/hocs/config";
import { Tools } from "../Editor/Tools";
import { ConfigActionType } from "src/reducer/reducer";
import { useFocusNode } from "src/hooks/useFocusNode";

const StyledLiveEditor = styled.div`
  position: relative;
`;

const StyledEditorWrapper = styled.div`
  position: absolute;

  :active {
    cursor: move;
  }

  rect {
    fill: ${({ theme }) => theme.BACKGROUND_NODE};
  }
`;

const wheelOptions = {
  step: 0.05,
};

export const LiveEditor: React.FC = React.memo(function LiveEditor() {
  const {
    states: { json, settings },
    dispatch,
  } = useConfig();
  const pageLoaded = useLoading();
  const [data, setData] = React.useState({
    nodes: [],
    edges: [],
  });

  React.useEffect(() => {
    const { nodes, edges } = getEdgeNodes(json, settings.expand);

    setData({ nodes, edges });
  }, [json, settings.expand]);

  const onCanvasClick = () => {
    const input = document.querySelector("input:focus") as HTMLInputElement;
    if (input) input.blur();
  };

  const onInit = (ref: ReactZoomPanPinchRef) =>
    dispatch({
      type: ConfigActionType.SET_ZOOM_PAN_PICNH_REF,
      payload: ref,
    });

  if (pageLoaded)
    return (
      <StyledLiveEditor>
        <Tools />
        <StyledEditorWrapper>
          <TransformWrapper
            maxScale={1.8}
            minScale={0.4}
            initialScale={0.8}
            limitToBounds={false}
            wheel={wheelOptions}
            onInit={onInit}
          >
            <TransformComponent>
              <Canvas
                nodes={data.nodes}
                node={(props) => <CustomNode {...props} />}
                edges={data.edges}
                maxWidth={20000}
                maxHeight={20000}
                center={false}
                zoomable={false}
                fit={true}
                direction={settings.layout}
                readonly
                key={settings.layout}
                onCanvasClick={onCanvasClick}
              />
            </TransformComponent>
          </TransformWrapper>
        </StyledEditorWrapper>
      </StyledLiveEditor>
    );

  return null;
});
