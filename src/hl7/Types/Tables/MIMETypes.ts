/**
 * User Defined Tables - Tables with data suggested by HL7 organization. Most table are customized to reflect system workflows and coded values (such as lab values).
 *
 * <pre>
 * application  Application data
 * audio  Audio data
 * image  Image data
 * model  Model data
 * multipart  MIME multipart package
 * text  Text data
 * video  Video data
 * </pre>
 */
export type MIMETypes =
  | "application"
  | "audio"
  | "image"
  | "model"
  | "multipart"
  | "text"
  | "video";
