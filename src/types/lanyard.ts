export interface LanyardResponse {
  data: {
    kv: Record<string, unknown>;
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
      global_name: string;
      display_name: string;
      public_flags: number;
      clan: null;
      primary_guild?: {
        tag: string;
        identity_guild_id: string;
        badge: string;
        identity_enabled: boolean;
      };
      avatar_decoration_data: null;
      collectibles: null;
      bot: boolean;
    };
    activities: Array<any>;
    discord_status: "online" | "idle" | "dnd" | "offline";
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_embedded: boolean;
    listening_to_spotify: boolean;
    spotify: null | {
      track_id: string;
      timestamps: {
        start: number;
        end: number;
      };
      song: string;
      artist: string;
      album_art_url: string;
      album: string;
    };
  };
  success: boolean;
}
