
class LocationExtension {
  constructor() {
    this.latitude = 0;
    this.longitude = 0;
    this._getLocation();
  }

  getInfo() {
    return {
      id: 'konumUzantisi',
      name: 'Konum',
      blocks: [
        {
          opcode: 'getLatitude',
          blockType: Scratch.BlockType.REPORTER,
          text: 'enlem',
        },
        {
          opcode: 'getLongitude',
          blockType: Scratch.BlockType.REPORTER,
          text: 'boylam',
        },
        {
          opcode: 'refreshLocation',
          blockType: Scratch.BlockType.COMMAND,
          text: 'konumu güncelle',
        }
      ]
    };
  }

  getLatitude() {
    return this.latitude;
  }

  getLongitude() {
    return this.longitude;
  }

  refreshLocation() {
    this._getLocation();
  }

  _getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, (err) => {
        console.error("Konum alınamadı:", err);
      });
    } else {
      console.warn("Tarayıcı konum özelliğini desteklemiyor.");
    }
  }
}

Scratch.extensions.register(new LocationExtension());
