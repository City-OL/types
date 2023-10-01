// Type definitions for City-OL applications.
// Project: https://city-ol.ch/
// Definitions by: Tim Mutkala <https://github.com/timmedia>
// Definitions: https://github.com/City-OL/types
// TypeScript Version: 5.2

/// <reference types="geojson" />

import type { BBox, Feature, Point, Position } from "geojson";

/**
 * Icons for the description of individual controls.
 */
export enum OrienteeringControlAttribute {
  AntHillTermiteMound = "ant_hill_termite_mound",
  FirmGroundInMarsh = "firm_ground_in_marsh",
  NorthWestPart = "north_west_part",
  SouthFoot = "south_foot",
  BareRock = "bare_rock",
  FirstAidPost = "first_aid_post",
  NorthWestSide = "north_west_side",
  SouthPart = "south_part",
  Bend = "bend",
  FodderRack = "fodder_rack",
  NorthWestTip = "north_west_tip",
  SouthSide = "south_side",
  Beneath = "beneath",
  FootNoDirection = "foot_no_direction",
  OpenLand = "open_land",
  SouthTip = "south_tip",
  Between = "between",
  ForestCorner = "forest_corner",
  Open = "open",
  SouthWestCornerInside = "south_west_corner_inside",
  BoulderCluster = "boulder_cluster",
  Hill = "hill",
  Overgrown = "overgrown",
  SouthWestCornerOutside = "south_west_corner_outside",
  BoulderField = "boulder_field",
  Junction = "junction",
  PavedArea = "paved_area",
  SouthWestEdge = "south_west_edge",
  Boulder = "boulder",
  Knol = "knol",
  Pipeline = "pipeline",
  SouthWestEnd = "south_west_end",
  BoundaryStoneCairn = "boundary_stone_cairn",
  Lake = "lake",
  Pit = "pit",
  SouthWestern = "south_western",
  Bridge = "bridge",
  LinearThicket = "linear_thicket",
  Pond = "pond",
  SouthWestFoot = "south_west_foot",
  BroadLeaved = "broad_leaved",
  LowerPart = "lower_part",
  PowerLinePylon = "power_line_pylon",
  SouthWestPart = "south_west_part",
  BrokenGround = "broken_ground",
  Lower = "lower",
  PowerLine = "power_line",
  SouthWestSide = "south_west_side",
  BuildingPassThrough = "building_pass_through",
  Low = "low",
  Quarry = "quarry",
  SouthWestTip = "south_west_tip",
  Building = "building",
  Marsh = "marsh",
  RadioOrTvControl = "radio_or_tv_control",
  SpecialItemO = "special_item_o",
  Cave = "cave",
  Marshy = "marshy",
  ReEntrant = "re-entrant",
  SpecialItemX = "special_item_x",
  CharcoalBurningGround = "charcoal_burning_ground",
  Middle = "middle",
  RefreshmentPoint = "refreshment_point",
  Spring = "spring",
  Clearing = "clearing",
  MinorWaterChannelDitch = "minor_water_channel_ditch",
  Ride = "ride",
  Spur = "spur",
  CliffRockFace = "cliff_rock_face",
  MonumentOrStatue = "monument_or_statue",
  RiverStreamWatercourse = "river_stream_watercourse",
  Stairway = "stairway",
  ControlCheck = "control_check",
  NarrowMarsh = "narrow_marsh",
  Road = "road",
  StartLocation = "start_location",
  ControlPointLeftArrow = "control_point_left_arrow",
  NarrowPassage = "narrow_passage",
  RockPillar = "rock_pillar",
  Start = "start",
  ControlPointRightArrow = "control_point_right_arrow",
  NeedleLeaved = "needle_leaved",
  RockyStony = "rocky_stony",
  StoneWall = "stone_wall",
  ControlPoint = "control_point",
  NorthCornerInside = "north_corner_inside",
  Ruined = "ruined",
  StonyGround = "stony_ground",
  Copse = "copse",
  NorthCornerOutside = "north_corner_outside",
  Ruin = "ruin",
  Terrace = "terrace",
  CrossingPoint = "crossing_point",
  NorthEastCornerInside = "north_east_corner_inside",
  Saddle = "saddle",
  Thicket = "thicket",
  Crossing = "crossing",
  NorthEastCornerOutside = "north_east_corner_outside",
  Sandy = "sandy",
  Top = "top",
  Deep = "deep",
  NorthEastEdge = "north_east_edge",
  SemiOpenLand = "semi-open_land",
  Tower = "tower",
  Depression = "depression",
  NorthEastEnd = "north_east_end",
  Shallow = "shallow",
  TrackPath = "track_path",
  DistinctiveTree = "distinctive_tree",
  NorthEastern = "north_eastern",
  ShootingPlatform = "shooting_platform",
  TreeStumpRootStock = "tree_stump_root_stock",
  EarthBank = "earth_bank",
  NorthEastFoot = "north_east_foot",
  SlashForHeightOnSlope = "slash_for_height_on_slope",
  Tunnel = "tunnel",
  EarthWall = "earth_wall",
  NorthEastPart = "north_east_part",
  SmallDepression = "small_depression",
  UpperPart = "upper_part",
  EastCornerInside = "east_corner_inside",
  NorthEastSide = "north_east_side",
  SmallErosionGully = "small_erosion_gully",
  Upper = "upper",
  EastCornerOutside = "east_corner_outside",
  NorthEastTip = "north_east_tip",
  SouthCornerInside = "south_corner_inside",
  VegetationBoundary = "vegetation_boundary",
  EastEdge = "east_edge",
  NorthEdge = "north_edge",
  SouthCornerOutside = "south_corner_outside",
  Waterhole = "waterhole",
  EastEnd = "east_end",
  NorthEnd = "north_end",
  SouthEastCornerInside = "south_east_corner_inside",
  WaterTankWaterTrough = "water_tank_water_trough",
  Eastern = "eastern",
  Northern = "northern",
  SouthEastCornerOutside = "south_east_corner_outside",
  Well = "well",
  EastFoot = "east_foot",
  NorthFoot = "north_foot",
  SouthEastEdge = "south_east_edge",
  WestCornerInside = "west_corner_inside",
  EastPart = "east_part",
  NorthPart = "north_part",
  SouthEastEnd = "south_east_end",
  WestCornerOutside = "west_corner_outside",
  EastSide = "east_side",
  NorthSide = "north_side",
  SouthEastern = "south_eastern",
  WestEdge = "west_edge",
  EastTip = "east_tip",
  NorthTip = "north_tip",
  SouthEastFoot = "south_east_foot",
  WestEnd = "west_end",
  EllipseOutlineIonIcon = "ellipse-outline_ion_icon",
  NorthWestCornerInside = "north_west_corner_inside",
  SouthEastPart = "south_east_part",
  Western = "western",
  ErosionGully = "erosion_gully",
  NorthWestCornerOutside = "north_west_corner_outside",
  SouthEastSide = "south_east_side",
  WestFoot = "west_foot",
  Fence = "fence",
  NorthWestEdge = "north_west_edge",
  SouthEastTip = "south_east_tip",
  WestPart = "west_part",
  FinishLeftArrow = "finish_left_arrow",
  NorthWestEnd = "north_west_end",
  SouthEdge = "south_edge",
  WestSide = "west_side",
  FinishRightArrow = "finish_right_arrow",
  NorthWestern = "north_western",
  SouthEnd = "south_end",
  WestTip = "west_tip",
  Finish = "finish",
  NorthWestFoot = "north_west_foot",
  Southern = "southern",
}

/**
 * Properties of a physical orienteering control point.
 * Adapted from the International Orienteering Federation: {@link https://orienteering.sport/iof/rules/control-descriptions/}
 */
export interface OrienteeringControlProperties {
  /**
   * Specifies whether the course is currently active
   */
  active: boolean;
  /**
   * Unique identifier of the control
   */
  controlId?: string;
  /**
   * Alphanumeric name of the control, e.g. "Townhall"
   */
  name?: string;
  /**
   * Secret of the control, e.g. what is shown on the QR code.
   */
  code: string;
  /**
   * Control code (Postenkennzahl) as shown on the control description sheet in column B
   */
  node?: string | number;
  /**
   * Which of any similar feature (Welches von mehreren gleichen), control description column C
   */
  which?: OrienteeringControlAttribute;
  /**
   * Control feature (Postenmerkmal), control description column D
   */
  feature?: OrienteeringControlAttribute;
  /**
   * Control appearance (Eigenschaften), control description column E
   */
  appearance?: OrienteeringControlAttribute;
  /**
   * Control Dimensions / Combinations / Bend (Grösse / Kombination), control description column F
   */
  dimensions?: OrienteeringControlAttribute;
  /**
   * Location of the control flag, control description column G
   */
  controlLocation?: OrienteeringControlAttribute;
  /**
   * Control other information, control description column H
   */
  otherInformation?: OrienteeringControlAttribute;
  /**
   * Control metadata reference
   */
  pointOfInterestId?: string;
  [propName: string]: any;
}

/**
 * Orienteering control with a physical location.
 */
export type OrienteeringControl<
  P extends OrienteeringControlProperties = OrienteeringControlProperties
> = Feature<Point, P>;

/**
 * Physical orienteering control that can be visited or skipped.
 */
export interface TouchedOrienteeringControlProperties
  extends OrienteeringControlProperties {
  visited: number;
  skipped: boolean;
}

/**
 * Tile layer projection method.
 */
export interface ProjectionMethod {
  name: string;
  code: string;
  options: {
    origin?: [number, number];
    resolutions?: number[];
  };
}

/**
 * Configuration of a map tile layer.
 */
export interface MapLayerConfig {
  url: string;
  tileSize: 512 | 256;
  zoomOffset?: number;
  properties: {
    [key: string]: string;
  };
  [propName: string]: any;
}

/**
 * Map configuration when using raster tiles.
 */
export interface RasterTileMapConfig {
  type: "raster";
  /**
   * Name of the configuration.
   */
  name: string;
  projectionMethod: ProjectionMethod;
  /**
   * Tile layers, bottom to top.
   */
  layers: MapLayerConfig[];
  /**
   * Attribution of the map.
   */
  attribution?: string;
  minZoom: number;
  maxZoom: number;
  center?: Position;
  bounds?: BBox;
  /**
   * Id which uniquely identifies this map configuration.
   */
  mapConfigId?: string;
  [propName: string]: any;
}

/**
 * Default `MapConfig` type.
 */
export type MapConfig = RasterTileMapConfig;

/**
 * Properties an an orienteering course.
 */
export interface OrienteeringCourseProperties {
  /**
   * Unique id, e.g. under which it is stored in a database.
   */
  courseId?: string;
  /**
   * Whether the course is publicly visible or not.
   */
  public: boolean;
  /**
   * Course name or number, as shown on the control description sheet.
   */
  shortTitle: string;
  /**
   * Non-localized title of the course, as shown on the control description sheet.
   */
  defaultTitle: string;
  /**
   * Short description of the course, as shown inside the admin area of the app.
   */
  defaultDescription: string;
  /**
   * Whether to allow showing a map inside the app
   */
  showMapInApp: boolean;
  /**
   * Whether to allow location services to be used inside the app.
   */
  allowGPSHelp: boolean;
  /**
   * Optional reference to a course metadata entry, e.g. from contentful.
   */
  metadataId?: string;
  /**
   * Secret to start the course with, e.g. to be used if the course is private.
   */
  secret?: string;
  [propName: string]: any;
}

/**
 * Orienteering course.
 */
export interface OrienteeringCourse<
  T = string | OrienteeringControl,
  K = string | MapConfig
> {
  /**
   * Controls that make up the orienteering course. Can either be a reference or an object of type `OrienteeringControl`.
   */
  controls: T[];
  /**
   * The map to be used. Can either be a reference or a `MapConfig` object.
   */
  mapConfig: K;
  /**
   * Properties of the course, such as access code, the type of help allowed, etc.
   */
  properties: OrienteeringCourseProperties;
  [propName: string]: any;
}

/**
 * An orienteering activity completed by a user.
 */
export interface CompletedOrienteeringCourse extends OrienteeringCourse {
  /**
   * Reference to the owner (uid).
   */
  owner: string;
  /**
   * Reference to the activity.
   */
  completedCourseId: string;
}

/**
 * User profile.
 */
export interface UserProfile {
  /**
   * Unique identifier
   */
  uid: string;
  /**
   * List of references to completed courses.
   */
  completedCourses?: string[];
  /**
   * List of references to created courses.
   */
  createdCourses: string[];
  /**
   * Whether the profile is publicly visible or not.
   */
  public: boolean;
  /**
   * Whether the profile has been verified.
   */
  verified: boolean;
  /**
   * Name as given by the identity provider.
   */
  name?: string;
  /**
   * Name as to be shown in the app.
   */
  displayName?: string;
  /**
   * Email of the user
   */
  email?: string;
  /**
   * Profile picture URL.
   */
  photoUrl?: string;
}

/**
 * Support ticket.
 */
export interface Ticket {
  /**
   * Whether the ticket may be traced back to the user
   */
  anonymous: boolean;
  /**
   * Message body
   */
  body: string;
  /**
   * Topic of the ticket
   */
  topic: string;
  /**
   * Whether it has been resolved
   */
  resolved: boolean;
  /**
   * Email address of the user, if given, the user may be contacted.
   */
  email?: string;
  /**
   * Unique identifier of the user.
   */
  uid?: string;
}
