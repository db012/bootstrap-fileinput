/*!
 * FileInput <it> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinput.locales.it = {
        fileSingle: 'file',
        filePlural: 'files',
        browseLabel: 'Browse &hellip;',
        removeLabel: 'Rimuovi',
        removeTitle: 'Cancella i files selezionati',
        cancelLabel: 'Cancel',
        cancelTitle: 'Ferma l\'upload in corso',
        uploadLabel: 'Carica',
        uploadTitle: 'Carica i files selezionati',
        msgSizeTooLarge: 'Il file "{name}" (<b>{size} KB</b>) supera la massima dimensione consentita pari a <b>{maxSize} KB</b>. Per cortesia carica un altro file.',
        msgFilesTooLess: 'Devi selezionare almeno <b>{n}</b> {files} da caricare. Per cortesia riprova.',
        msgFilesTooMany: 'Il numero di files selezionati <b>({n})</b> supera il massimo numero consentito pari a <b>{m}</b>. Per cortesia riprova.',
        msgFileNotFound: 'File "{name}" non trovato.',
        msgFileSecured: 'Restrizioni di sicurezza impediscono di leggere il file "{name}".',
        msgFileNotReadable: 'Il file "{name}" non può essere letto.',
        msgFilePreviewAborted: 'L\'anteprima del file è stata bloccata per "{name}".',
        msgFilePreviewError: 'Si è verificato un errore durante la lettura del file "{name}".',
        msgInvalidFileType: 'Tipo di file non valido per il file "{name}". Solo files "{types}" sono supportati.',
        msgInvalidFileExtension: 'Estensione non valida per il file "{name}". Solo "{extensions}" files sono supportati.',
        msgValidationError: 'Errore nel caricamento del file',
        msgLoading: 'Sto caricando {index} di {files} &hellip;',
        msgProgress: 'Sto caricando {index} di {files} - {name} - {percent}% completata.',
        msgSelected: '{n} files selezionati',
        msgFoldersNotAllowed: 'Drag & drop solo file! Saltati {n} folder trascinati.',
        dropZoneTitle: 'Drag & drop i files qui &hellip;'
    };

    $.extend($.fn.fileinput.defaults, $.fn.fileinput.locales.it);
})(window.jQuery);
