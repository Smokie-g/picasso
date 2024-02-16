import React, { FC } from 'react'
import { styled } from 'styled-components'
import {
  AutoSizer,
  List,
  CellMeasurerCache,
  ListRowProps,
  Index,
} from 'react-virtualized'
import { HEADER_HEIGHT } from '../../../../utils'

interface IProps {
  cache: CellMeasurerCache
  postsLength: number
  rowHeight: number | ((params: Index) => number)
  renderRow: FC<ListRowProps>
}

const TableWrapper = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 7px;
  margin-top: ${HEADER_HEIGHT + 16}px;
  margin-left: 24px;
  margin-right: 24px;
`
const Wrapper = styled.div`
  height: calc(100vh - 96px);
`

export const ListItem: FC<IProps> = ({
  cache,
  postsLength,
  renderRow,
  rowHeight,
}) => (
  <TableWrapper>
    <Wrapper>
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={rowHeight}
            rowRenderer={renderRow}
            rowCount={postsLength}
            overscanRowCount={3}
          />
        )}
      </AutoSizer>
    </Wrapper>
  </TableWrapper>
)
