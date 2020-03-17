import React from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
  name: string;
  main_image: string;
  creator: string;
  changeThemeId: (id: number) => void;
}
interface StationInfo {
  station_id: number;
  image: string;
}
interface State {
  data: Array<StationInfo>;
}

class ThemeListComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.ListFetch();
  }

  ListFetch = () => {
    // const themeId = this.props.location.search.split('=')[1];
    fetch(`http://10.58.2.227:8000/music/station/theme`, {
      method: 'GET',
    })
      // fetch('http://10.58.2.227:8000/music/station/20')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.theme_images,
        });
      });
  };

  render() {
    return (
      <ThemeBox
        onClick={() => {
          this.props.changeThemeId(this.props.id);
        }}
      >
        <ThemeImg src={this.props.main_image} alt="" />
        <TitleOfTheme>{this.props.name}</TitleOfTheme>
        <CreatorOfTheme>{this.props.creator}</CreatorOfTheme>
      </ThemeBox>
    );
  }
}
export default ThemeListComponent;
const ThemeBox = styled.li`
  float: left;
  width: 110px;
  padding: 25px 0 0 10px;
  position: relative;
`;
const ThemeImg = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;
`;
const TitleOfTheme = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  padding-top: 10px;
  font-size: 14px;
  line-height: 17px;
  color: #232323;
`;
const CreatorOfTheme = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  padding-top: 4px;
  font-size: 13px;
  line-height: 15px;
  color: #999;
`;
