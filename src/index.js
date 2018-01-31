import React, { Component } from 'react';

const externalJs = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

class ReactGoogleAdsense extends Component {
    componentDidMount() {
        ((d, s, id, cb) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
      
            js = d.createElement(s);
            js.id = id;
            js.src = externalJs;
            fjs.parentNode.insertBefore(js, fjs);
            js.onload = cb;
          })(document, 'script', 'google-ads-sdk', () => {
            (adsbygoogle = window.adsbygoogle || []).push({});
          });
    }

    render() {
        return (
            <ins
                className={`adsbygoogle ${this.props.className || ''}`}
                data-ad-client={this.props.client}
                data-ad-slot={this.props.slot}
                data-ad-format={this.props.format}
                style={this.props.style}
            />
        );
    }
}

ReactGoogleAdsense.propTypes = {
    client: React.PropTypes.string.isRequired,
    slot: React.PropTypes.string.isRequired,
    format: React.PropTypes.string,
    className: React.PropTypes.string,
    style: React.PropTypes.object
};

ReactGoogleAdSense.defaultProps = {
    style: { display: 'block '},
    format: 'auto'
};

export default ReactGoogleAdsense;